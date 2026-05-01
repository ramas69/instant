<?php

declare(strict_types=1);

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Page contact + traitement du formulaire de contact.
 *
 * Sprint 2 :
 *   - GET /contact → form
 *   - POST /contact → validation + envoi email à hello@instant-ia.com + redirect avec flash
 *
 * Anti-spam basique :
 *   - Honeypot : champ caché "website" → rempli par les bots, doit rester vide
 *   - Validation email côté serveur
 *
 * Sprint 4+ : intégration Brevo + rate limiter par IP.
 */
final class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact_form', methods: ['GET'])]
    public function form(): Response
    {
        return $this->render('contact/index.html.twig');
    }

    #[Route('/contact', name: 'contact_submit', methods: ['POST'])]
    public function submit(
        Request $request,
        ValidatorInterface $validator,
        MailerInterface $mailer,
        LoggerInterface $logger,
        #[Autowire(env: 'MAILER_FROM_EMAIL')]
        string $contactEmail,
    ): RedirectResponse {
        // Honeypot anti-spam — un bot va remplir ce champ
        $honeypot = trim((string) $request->request->get('website', ''));
        if ('' !== $honeypot) {
            $logger->warning('Tentative spam contact (honeypot)', [
                'ip' => $request->getClientIp(),
                'honeypot_value' => $honeypot,
            ]);
            // On simule un succès pour ne pas donner d'info au bot
            return $this->redirectToRoute('contact_form');
        }

        $name = trim((string) $request->request->get('name', ''));
        $email = trim((string) $request->request->get('email', ''));
        $subject = trim((string) $request->request->get('subject', ''));
        $message = trim((string) $request->request->get('message', ''));

        $emailErrors = $validator->validate($email, [
            new Assert\NotBlank(message: 'Saisis ton email.'),
            new Assert\Email(message: 'Cet email n\'est pas valide.'),
            new Assert\Length(max: 180),
        ]);

        $hasErrors = false;
        if ('' === $name) {
            $this->addFlash('error', 'Saisis ton nom.');
            $hasErrors = true;
        }
        if (\count($emailErrors) > 0) {
            foreach ($emailErrors as $error) {
                $this->addFlash('error', $error->getMessage());
            }
            $hasErrors = true;
        }
        if ('' === $message) {
            $this->addFlash('error', 'Saisis ton message.');
            $hasErrors = true;
        }
        if (\strlen($message) > 5000) {
            $this->addFlash('error', 'Ton message est trop long (max 5000 caractères).');
            $hasErrors = true;
        }

        if ($hasErrors) {
            return $this->redirectToRoute('contact_form');
        }

        $emailToRama = (new Email())
            ->from($contactEmail)
            ->replyTo($email)
            ->to($contactEmail)
            ->subject(\sprintf('[Contact] %s', '' !== $subject ? $subject : 'Nouveau message'))
            ->text(\sprintf(
                "Nom : %s\nEmail : %s\nSujet : %s\n\nMessage :\n%s",
                $name,
                $email,
                '' !== $subject ? $subject : '(non précisé)',
                $message,
            ));

        try {
            $mailer->send($emailToRama);
        } catch (\Throwable $e) {
            $logger->error('Échec envoi email contact', [
                'exception' => $e::class,
                'message' => $e->getMessage(),
                'expediteur' => $email,
            ]);
            $this->addFlash('error', 'Une erreur est survenue, réessaye dans quelques minutes ou écris directement à hello@instant-ia.com.');

            return $this->redirectToRoute('contact_form');
        }

        $logger->info('Message contact reçu', [
            'expediteur' => $email,
            'sujet' => $subject,
            'longueur_message' => \strlen($message),
        ]);

        $this->addFlash('success', 'Merci ! Ton message est bien arrivé. Je te réponds sous 48h ouvrées.');

        return $this->redirectToRoute('contact_form');
    }
}
