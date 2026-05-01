<?php

declare(strict_types=1);

namespace App\Tests\Cours\Entity;

use App\Cours\Entity\Cours;
use App\Cours\Entity\Lecon;
use App\Cours\Entity\Module;
use PHPUnit\Framework\TestCase;

final class CoursTest extends TestCase
{
    public function testCreationParDefaut(): void
    {
        $cours = new Cours(
            titre: 'Le Système Claude du Consultant',
            slug: 'le-systeme-claude-du-consultant',
            description: 'Formation 14 jours.',
            prixCentimes: 14700,
        );

        self::assertSame('Le Système Claude du Consultant', $cours->getTitre());
        self::assertSame('le-systeme-claude-du-consultant', $cours->getSlug());
        self::assertSame(14700, $cours->getPrixCentimes());
        self::assertFalse($cours->isPublished());
        self::assertSame(0, $cours->getOrdre());
        self::assertCount(0, $cours->getModules());
    }

    public function testAjoutModuleEtablitLaRelationInverse(): void
    {
        $cours = new Cours('Titre', 'titre', 'desc', 0);
        $module = new Module('Mod 1', $cours, 1);

        $cours->addModule($module);

        self::assertCount(1, $cours->getModules());
        self::assertSame($cours, $module->getCours());
        self::assertSame(1, $cours->getNombreModules());
    }

    public function testAjoutModuleEstIdempotent(): void
    {
        $cours = new Cours('Titre', 'titre', 'desc', 0);
        $module = new Module('Mod 1', $cours);

        $cours->addModule($module);
        $cours->addModule($module);
        $cours->addModule($module);

        self::assertCount(1, $cours->getModules());
    }

    public function testCascadeCoursModuleLecon(): void
    {
        $cours = new Cours('Titre', 'titre', 'desc', 0);
        $module = new Module('Mod 1', $cours);
        $lecon = new Lecon('Lecon 1', 'lecon-1', $module);

        $cours->addModule($module);
        $module->addLecon($lecon);

        self::assertCount(1, $cours->getModules());
        self::assertCount(1, $cours->getModules()->first()->getLecons());
        self::assertSame($module, $lecon->getModule());
    }
}
