<?php

declare(strict_types=1);

namespace App\Controller;

use App\Achat\Repository\AchatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Parcours d'achat — pattern Stripe Payment Links.
 *
 * Sprint 2 :
 *   - GET /achat/success → page de confirmation après paiement réussi
 *   - GET /achat/annule → message rassurant si l'utilisateur annule chez Stripe
 *   - GET /achat/{slug} → redirige vers le Payment Link Stripe configuré dans .env
 *
 * Important : success et annule sont déclarés AVANT {slug} pour que les routes
 * spécifiques aient priorité sur le pattern générique.
 *
 * Le webhook Stripe (signature + idempotence + persistance Achat) est géré
 * dans App\Achat\Controller\StripeWebhookController (Sprint 2.7).
 *
 * Sprint 3+ : on basculera vers un mapping dynamique slug → Payment Link
 * stocké en BDD (Cours::stripePaymentLinkUrl par tier).
 */
final class AchatController extends AbstractController
{
    /**
     * Mapping hardcodé Sprint 2 — sera remplacé par un lookup BDD au Sprint 3.
     * Aujourd'hui, on n'a qu'un seul produit vendable (Niveau 1, tier early-bird).
     *
     * @var array<string, string>
     */
    private array $paymentLinks;

    public function __construct(
        #[Autowire(env: 'STRIPE_PAYMENT_LINK_NIVEAU_1_EARLY_BIRD')]
        string $niveau1EarlyBird,
        #[Autowire(env: 'STRIPE_PAYMENT_LINK_NIVEAU_1_LAUNCH')]
        string $niveau1Launch,
        #[Autowire(env: 'STRIPE_PAYMENT_LINK_NIVEAU_1_CATALOG')]
        string $niveau1Catalog,
    ) {
        $this->paymentLinks = [
            'le-systeme-claude-du-consultant' => $niveau1EarlyBird,
            'le-systeme-claude-du-consultant-launch' => $niveau1Launch,
            'le-systeme-claude-du-consultant-catalog' => $niveau1Catalog,
        ];
    }

    #[Route('/achat/success', name: 'achat_success', methods: ['GET'])]
    public function success(Request $request, AchatRepository $achatRepository): Response
    {
        $sessionId = (string) $request->query->get('session_id', '');

        // Si Stripe a transmis le session_id en query (configurable dans le Payment Link),
        // on tente un lookup pour afficher des infos personnalisées.
        // Si l'Achat n'est pas encore en base (webhook arrive en async), on affiche quand même
        // un message générique — le webhook traitera la persistance dans les secondes qui suivent.
        $achat = '' !== $sessionId
            ? $achatRepository->findOneByStripeSessionId($sessionId)
            : null;

        return $this->render('achat/success.html.twig', [
            'sessionId' => $sessionId,
            'achat' => $achat,
        ]);
    }

    #[Route('/achat/annule', name: 'achat_annule', methods: ['GET'])]
    public function annule(): Response
    {
        return $this->render('achat/annule.html.twig');
    }

    #[Route(
        '/achat/{slug}',
        name: 'achat_init',
        methods: ['GET'],
        requirements: ['slug' => '(?!success|annule)[a-z0-9-]+'],
    )]
    public function init(string $slug): RedirectResponse
    {
        if (!isset($this->paymentLinks[$slug])) {
            throw new NotFoundHttpException(\sprintf('Aucun produit vendable trouvé pour le slug "%s".', $slug));
        }

        return $this->redirect($this->paymentLinks[$slug]);
    }
}
