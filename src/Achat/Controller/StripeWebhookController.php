<?php

declare(strict_types=1);

namespace App\Achat\Controller;

use App\Achat\Service\AchatService;
use Psr\Log\LoggerInterface;
use Stripe\Checkout\Session;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Endpoint webhook Stripe — réception des événements asynchrones.
 *
 * Stripe envoie ici tous les événements configurés dans le dashboard
 * (https://dashboard.stripe.com/webhooks). Pour Sprint 2, on traite
 * uniquement `checkout.session.completed` (paiement réussi via Payment Link).
 *
 * Sécurité critique :
 *   - Toujours vérifier la signature `stripe-signature` avec
 *     `Webhook::constructEvent()` et le `STRIPE_WEBHOOK_SECRET`.
 *   - Sans vérification valide, n'importe qui peut faker un paiement
 *     en POSTant sur cette URL.
 *
 * Idempotence :
 *   - Stripe rejoue les webhooks régulièrement (retries en cas de timeout,
 *     erreurs réseau, etc.). `AchatService::traiterPaiementReussi()` est
 *     idempotent par lookup `stripeSessionId` — mêmes données = même résultat.
 */
#[AsController]
final readonly class StripeWebhookController
{
    public function __construct(
        private AchatService $achatService,
        private LoggerInterface $logger,
        #[Autowire(env: 'STRIPE_WEBHOOK_SECRET')]
        private string $webhookSecret,
    ) {
    }

    #[Route('/webhooks/stripe', name: 'webhook_stripe', methods: ['POST'])]
    public function __invoke(Request $request): Response
    {
        $payload = $request->getContent();
        $sigHeader = $request->headers->get('stripe-signature', '');

        if ('' === $sigHeader) {
            $this->logger->warning('Webhook Stripe sans header de signature', [
                'ip' => $request->getClientIp(),
            ]);

            return new Response('Missing stripe-signature header', 400);
        }

        try {
            $event = Webhook::constructEvent($payload, $sigHeader, $this->webhookSecret);
        } catch (\UnexpectedValueException $e) {
            $this->logger->warning('Webhook Stripe : payload invalide', [
                'message' => $e->getMessage(),
            ]);

            return new Response('Invalid payload', 400);
        } catch (SignatureVerificationException $e) {
            $this->logger->warning('Webhook Stripe : signature invalide', [
                'message' => $e->getMessage(),
                'ip' => $request->getClientIp(),
            ]);

            return new Response('Invalid signature', 400);
        }

        // On traite seulement les événements qui nous intéressent.
        // Sprint 2 : checkout.session.completed (paiement Payment Link réussi).
        // Sprint 3+ : potentiellement charge.refunded, customer.subscription.* (Le Cercle), etc.
        if ('checkout.session.completed' !== $event->type) {
            $this->logger->info('Webhook Stripe ignoré (événement non supporté)', [
                'type' => $event->type,
                'event_id' => $event->id,
            ]);

            return new Response('Event type not handled (OK)', 200);
        }

        $session = $event->data->object;
        if (!$session instanceof Session) {
            return new Response('Unexpected object type', 400);
        }

        try {
            $this->achatService->traiterPaiementReussi($session);
        } catch (\Throwable $e) {
            // Erreur de traitement métier : on log mais on retourne 500
            // pour que Stripe retente (lookup BDD, fixtures manquantes, etc.).
            $this->logger->error('Erreur de traitement webhook Stripe', [
                'event_id' => $event->id,
                'session_id' => $session->id,
                'exception' => $e::class,
                'message' => $e->getMessage(),
            ]);

            return new Response('Internal processing error', 500);
        }

        return new Response('OK', 200);
    }
}
