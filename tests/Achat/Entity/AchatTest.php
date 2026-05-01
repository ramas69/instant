<?php

declare(strict_types=1);

namespace App\Tests\Achat\Entity;

use App\Achat\Entity\Achat;
use App\Achat\Enum\StatutAchat;
use App\Cours\Entity\Cours;
use App\User\Entity\User;
use PHPUnit\Framework\TestCase;

final class AchatTest extends TestCase
{
    private function nouveauAchat(): Achat
    {
        return new Achat(
            acheteur: new User('sandra@example.fr', '$argon2id$dummy'),
            cours: new Cours('Titre', 'titre', 'desc', 14700),
            montantCentimes: 14700,
            stripeSessionId: 'cs_test_a1b2c3',
        );
    }

    public function testCreationStatutPending(): void
    {
        $achat = $this->nouveauAchat();

        self::assertSame(StatutAchat::PENDING, $achat->getStatut());
        self::assertSame(14700, $achat->getMontantCentimes());
        self::assertSame('cs_test_a1b2c3', $achat->getStripeSessionId());
        self::assertNull($achat->getPaidAt());
        self::assertLessThanOrEqual(new \DateTimeImmutable(), $achat->getCreatedAt());
    }

    public function testMarquerPayeFixePaidAt(): void
    {
        $achat = $this->nouveauAchat();
        $achat->marquerPaye();

        self::assertSame(StatutAchat::PAID, $achat->getStatut());
        self::assertNotNull($achat->getPaidAt());
    }

    public function testMarquerPayeEstIdempotent(): void
    {
        $achat = $this->nouveauAchat();
        $achat->marquerPaye();
        $premierPaidAt = $achat->getPaidAt();

        // Simule un retry de webhook Stripe (cas réel : Stripe retry parfois)
        usleep(1000);
        $achat->marquerPaye();

        self::assertSame($premierPaidAt, $achat->getPaidAt());
    }

    public function testTransitionsStatut(): void
    {
        $achat = $this->nouveauAchat();

        $achat->marquerPaye();
        self::assertTrue($achat->getStatut()->ouvreAcces());

        $achat->marquerRembourse();
        self::assertSame(StatutAchat::REFUNDED, $achat->getStatut());
        self::assertFalse($achat->getStatut()->ouvreAcces());
    }

    public function testMarquerEchoueDepuisPending(): void
    {
        $achat = $this->nouveauAchat();
        $achat->marquerEchoue();

        self::assertSame(StatutAchat::FAILED, $achat->getStatut());
        self::assertNull($achat->getPaidAt());
    }
}
