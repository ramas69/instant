<?php

declare(strict_types=1);

namespace App\Tests\Achat\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Tests fonctionnels du webhook Stripe.
 *
 * On ne teste ici que la couche de **sécurité** (validation signature) car
 * c'est la partie critique de l'endpoint. Les tests métier de
 * `AchatService::traiterPaiementReussi()` sont couverts en unitaire séparément
 * (Sprint 3 — quand on ajoutera la fixture Cours et le PasswordHasher).
 */
final class StripeWebhookControllerTest extends WebTestCase
{
    public function testPostSansSignatureRetourne400(): void
    {
        $client = static::createClient();
        $client->request(
            method: 'POST',
            uri: '/webhooks/stripe',
            server: ['CONTENT_TYPE' => 'application/json'],
            content: '{"id":"evt_test","type":"checkout.session.completed"}',
        );

        self::assertResponseStatusCodeSame(400);
        self::assertSame('Missing stripe-signature header', $client->getResponse()->getContent());
    }

    public function testPostSignatureInvalideRetourne400(): void
    {
        $client = static::createClient();
        $client->request(
            method: 'POST',
            uri: '/webhooks/stripe',
            server: [
                'CONTENT_TYPE' => 'application/json',
                'HTTP_STRIPE_SIGNATURE' => 't=1700000000,v1=signature_completement_fake',
            ],
            content: '{"id":"evt_test"}',
        );

        self::assertResponseStatusCodeSame(400);
        self::assertSame('Invalid signature', $client->getResponse()->getContent());
    }

    public function testPostPayloadPasJsonValideRetourne400(): void
    {
        $client = static::createClient();
        $client->request(
            method: 'POST',
            uri: '/webhooks/stripe',
            server: [
                'CONTENT_TYPE' => 'application/json',
                'HTTP_STRIPE_SIGNATURE' => 't=1700000000,v1=fake',
            ],
            content: 'pas du json',
        );

        // Stripe parse d'abord le payload, puis vérifie la signature.
        // Un payload invalide retourne 400 "Invalid payload" OU "Invalid signature"
        // selon l'ordre interne — les deux sont acceptables.
        self::assertResponseStatusCodeSame(400);
    }

    public function testGetRetourneMethodNotAllowed(): void
    {
        $client = static::createClient();
        $client->request('GET', '/webhooks/stripe');

        self::assertResponseStatusCodeSame(405);
    }
}
