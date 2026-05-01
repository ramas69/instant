<?php

declare(strict_types=1);

namespace App\Tests\Progression\Entity;

use App\Cours\Entity\Cours;
use App\Cours\Entity\Lecon;
use App\Cours\Entity\Module;
use App\Progression\Entity\Progression;
use App\Progression\Enum\StatutProgression;
use App\User\Entity\User;
use PHPUnit\Framework\TestCase;

final class ProgressionTest extends TestCase
{
    private function nouvelleProgression(): Progression
    {
        $cours = new Cours('Titre', 'titre', 'desc', 0);
        $module = new Module('Mod', $cours);
        $lecon = new Lecon('Lecon', 'lecon', $module);
        $user = new User('sandra@example.fr', '$argon2id$dummy');

        return new Progression($user, $lecon);
    }

    public function testCreationStatutNotStarted(): void
    {
        $p = $this->nouvelleProgression();

        self::assertSame(StatutProgression::NOT_STARTED, $p->getStatut());
        self::assertNull($p->getLastViewedAt());
        self::assertNull($p->getCompletedAt());
    }

    public function testMarquerVueDeplaceEnInProgress(): void
    {
        $p = $this->nouvelleProgression();
        $p->marquerVue();

        self::assertSame(StatutProgression::IN_PROGRESS, $p->getStatut());
        self::assertNotNull($p->getLastViewedAt());
        self::assertNull($p->getCompletedAt());
    }

    public function testMarquerVueNeRegresseDepuisCompleted(): void
    {
        $p = $this->nouvelleProgression();
        $p->marquerTerminee();
        $p->marquerVue();

        // On reste sur COMPLETED — ne pas régresser
        self::assertSame(StatutProgression::COMPLETED, $p->getStatut());
    }

    public function testMarquerTermineeIdempotent(): void
    {
        $p = $this->nouvelleProgression();
        $p->marquerTerminee();
        $premierCompletedAt = $p->getCompletedAt();

        usleep(1000);
        $p->marquerTerminee();

        self::assertSame($premierCompletedAt, $p->getCompletedAt());
    }
}
