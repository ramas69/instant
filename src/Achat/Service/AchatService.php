<?php

declare(strict_types=1);

namespace App\Achat\Service;

use App\Achat\Entity\Achat;
use App\Achat\Exception\AchatProcessingException;
use App\Achat\Mailer\AchatMailer;
use App\Achat\Repository\AchatRepository;
use App\Cours\Entity\Cours;
use App\Cours\Repository\CoursRepository;
use App\User\Entity\User;
use App\User\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Stripe\Checkout\Session;

/**
 * Service métier des achats — orchestre les transitions de statut Achat
 * suite aux événements Stripe (webhook ou retour utilisateur).
 *
 * Idempotence stricte : un même `stripeSessionId` ne peut générer qu'un seul
 * Achat PAID, même si le webhook Stripe est rejoué (ce qu'il fait régulièrement).
 *
 * Sprint 2 limitations :
 *   - Le slug du Cours est hardcodé (le-systeme-claude-du-consultant)
 *     car on n'a qu'un produit vendable. Sprint 3+ : lookup par
 *     `metadata.cours_slug` que Rama configurera dans le Payment Link Stripe.
 *   - L'utilisateur est créé "à la volée" avec un mot de passe random hashé
 *     argon2id. Il devra le réinitialiser via reset-password (Sprint 3 auth).
 */
final readonly class AchatService
{
    public function __construct(
        private EntityManagerInterface $em,
        private AchatRepository $achatRepository,
        private CoursRepository $coursRepository,
        private UserRepository $userRepository,
        private AchatMailer $achatMailer,
        private LoggerInterface $logger,
    ) {
    }

    /**
     * Point d'entrée appelé par le webhook Stripe lors d'un
     * `checkout.session.completed`.
     *
     * @throws AchatProcessingException si le payload Stripe est incomplet
     *                                  ou si le Cours référencé est introuvable
     */
    public function traiterPaiementReussi(Session $session): Achat
    {
        // 1. Idempotence : si l'Achat existe déjà en PAID, on ne fait rien.
        $existing = $this->achatRepository->findOneByStripeSessionId($session->id);
        if (null !== $existing && $existing->getStatut()->ouvreAcces()) {
            $this->logger->info('Webhook Stripe ignoré (idempotence)', [
                'session_id' => $session->id,
                'achat_id' => (string) $existing->getId(),
            ]);

            return $existing;
        }

        // 2. Email acheteur depuis Stripe (peut venir de plusieurs champs selon le mode Stripe)
        $email = $this->extraireEmailAcheteur($session);
        if (null === $email) {
            throw AchatProcessingException::emailIntrouvableDansSession($session->id);
        }

        // 3. User : lookup par email, ou création à la volée
        $user = $this->userRepository->findOneByEmail($email) ?? $this->creerUtilisateur($email);

        // 4. Cours : Sprint 2 hardcodé sur le-systeme-claude-du-consultant
        // Sprint 3+ : lecture de $session->metadata['cours_slug']
        $coursSlug = 'le-systeme-claude-du-consultant';
        $cours = $this->coursRepository->findOneBySlug($coursSlug);
        if (null === $cours) {
            throw AchatProcessingException::coursIntrouvable($coursSlug);
        }

        // 5. Création ou réactivation de l'Achat
        if (null !== $existing) {
            // Achat existait en PENDING ou FAILED → on le réactive en PAID
            $existing->marquerPaye();
            $achat = $existing;
        } else {
            $montantCentimes = (int) ($session->amount_total ?? 0);
            $achat = new Achat($user, $cours, $montantCentimes, $session->id);
            $achat->marquerPaye();
            $this->em->persist($achat);
        }

        $this->em->flush();

        // 6. Email confirmation (Brevo en prod, null:// en dev → loggué Monolog)
        try {
            $this->achatMailer->envoyerConfirmation($achat);
        } catch (\Throwable $e) {
            // L'envoi d'email ne doit JAMAIS faire échouer le webhook.
            // On log l'erreur, Stripe verra un 200 OK et ne retentera pas.
            $this->logger->error('Échec envoi email confirmation après paiement', [
                'achat_id' => (string) $achat->getId(),
                'exception' => $e::class,
                'message' => $e->getMessage(),
            ]);
        }

        $this->logger->info('Achat traité avec succès', [
            'session_id' => $session->id,
            'achat_id' => (string) $achat->getId(),
            'email' => $email,
            'montant_centimes' => $achat->getMontantCentimes(),
        ]);

        return $achat;
    }

    private function extraireEmailAcheteur(Session $session): ?string
    {
        if (!empty($session->customer_email)) {
            return (string) $session->customer_email;
        }

        if (isset($session->customer_details) && !empty($session->customer_details->email)) {
            return (string) $session->customer_details->email;
        }

        return null;
    }

    private function creerUtilisateur(string $email): User
    {
        // Mot de passe random temporaire (32 chars hex) — l'utilisateur devra
        // le réinitialiser via reset-password (Sprint 3 auth).
        // PHP 8+ : password_hash() throw une ValueError plutôt que false en cas d'échec,
        // donc pas de check explicite à faire.
        $randomPassword = bin2hex(random_bytes(16));
        $hashed = password_hash($randomPassword, \PASSWORD_ARGON2ID);

        $user = new User($email, $hashed);
        $this->em->persist($user);

        $this->logger->info('Utilisateur créé à la volée depuis webhook Stripe', [
            'email' => $email,
        ]);

        return $user;
    }
}
