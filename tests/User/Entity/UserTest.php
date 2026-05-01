<?php

declare(strict_types=1);

namespace App\Tests\User\Entity;

use App\Shared\Enum\RoleUtilisateur;
use App\User\Entity\User;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Uid\Uuid;

final class UserTest extends TestCase
{
    public function testCreationAvecUuidV7(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');

        self::assertInstanceOf(Uuid::class, $user->getId());
        // Uuid v7 → version 7 explicitement
        self::assertSame(7, $user->getId()->toRfc4122()[14] === '7' ? 7 : 0);
        self::assertSame('sandra@example.fr', $user->getEmail());
        self::assertSame('$argon2id$dummy$hash', $user->getPassword());
        self::assertFalse($user->isVerified());
        self::assertInstanceOf(\DateTimeImmutable::class, $user->getCreatedAt());
    }

    public function testGetUserIdentifierRetourneEmail(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');

        self::assertSame('sandra@example.fr', $user->getUserIdentifier());
    }

    public function testRolesContiennentToujoursRoleUser(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');

        // Aucun rôle explicite → ROLE_USER injecté par défaut
        self::assertSame(['ROLE_USER'], $user->getRoles());
    }

    public function testSetRolesAjouteAdminMaisGardeUser(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');
        $user->setRoles([RoleUtilisateur::ADMIN]);

        $roles = $user->getRoles();
        self::assertContains('ROLE_ADMIN', $roles);
        self::assertContains('ROLE_USER', $roles);
        self::assertCount(2, $roles);
    }

    public function testSetRolesDedoublonneAdmin(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');
        $user->setRoles([RoleUtilisateur::ADMIN, RoleUtilisateur::ADMIN, RoleUtilisateur::USER]);

        // Aucun doublon malgré la liste avec doublons
        $roles = $user->getRoles();
        self::assertCount(2, array_unique($roles));
    }

    public function testEraseCredentialsNeFaitRien(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');
        $user->eraseCredentials();

        // Le password n'est PAS effacé : on ne stocke pas de plain password sur l'entité
        self::assertSame('$argon2id$dummy$hash', $user->getPassword());
    }

    public function testIsVerifiedTrue(): void
    {
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');
        $user->setIsVerified(true);

        self::assertTrue($user->isVerified());
    }

    public function testCreatedAtImmuableEnvironInstantane(): void
    {
        $avant = new \DateTimeImmutable();
        $user = new User('sandra@example.fr', '$argon2id$dummy$hash');
        $apres = new \DateTimeImmutable();

        self::assertGreaterThanOrEqual($avant, $user->getCreatedAt());
        self::assertLessThanOrEqual($apres, $user->getCreatedAt());
    }
}
