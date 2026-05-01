<?php

declare(strict_types=1);

namespace App\Tests\Achat\Enum;

use App\Achat\Enum\StatutAchat;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class StatutAchatTest extends TestCase
{
    public function testNombreDeStatuts(): void
    {
        self::assertCount(4, StatutAchat::cases());
    }

    public function testValeursStripeFriendly(): void
    {
        self::assertSame('pending', StatutAchat::PENDING->value);
        self::assertSame('paid', StatutAchat::PAID->value);
        self::assertSame('refunded', StatutAchat::REFUNDED->value);
        self::assertSame('failed', StatutAchat::FAILED->value);
    }

    #[DataProvider('ouvreAccesProvider')]
    public function testOuvreAcces(StatutAchat $statut, bool $attendu): void
    {
        self::assertSame($attendu, $statut->ouvreAcces());
    }

    public static function ouvreAccesProvider(): iterable
    {
        yield 'pending ne donne pas accès' => [StatutAchat::PENDING, false];
        yield 'paid donne accès' => [StatutAchat::PAID, true];
        yield 'refunded ferme l\'accès' => [StatutAchat::REFUNDED, false];
        yield 'failed n\'ouvre pas l\'accès' => [StatutAchat::FAILED, false];
    }

    public function testSeulPaidPeutEtreRembourse(): void
    {
        self::assertTrue(StatutAchat::PAID->peutEtreRembourse());
        self::assertFalse(StatutAchat::PENDING->peutEtreRembourse());
        self::assertFalse(StatutAchat::REFUNDED->peutEtreRembourse());
        self::assertFalse(StatutAchat::FAILED->peutEtreRembourse());
    }
}
