<?php

declare(strict_types=1);

namespace App\Tests\Shared\Enum;

use App\Shared\Enum\RoleUtilisateur;
use PHPUnit\Framework\TestCase;

final class RoleUtilisateurTest extends TestCase
{
    public function testValeursRespectentConventionSymfonySecurity(): void
    {
        self::assertSame('ROLE_USER', RoleUtilisateur::USER->value);
        self::assertSame('ROLE_ADMIN', RoleUtilisateur::ADMIN->value);
    }

    public function testNombreDeRoles(): void
    {
        self::assertCount(2, RoleUtilisateur::cases());
    }
}
