<?php

declare(strict_types=1);

namespace App\Tests\Progression\Enum;

use App\Progression\Enum\StatutProgression;
use PHPUnit\Framework\TestCase;

final class StatutProgressionTest extends TestCase
{
    public function testNombreDeStatuts(): void
    {
        self::assertCount(3, StatutProgression::cases());
    }

    public function testEstTermineUniquementSurCompleted(): void
    {
        self::assertTrue(StatutProgression::COMPLETED->estTermine());
        self::assertFalse(StatutProgression::IN_PROGRESS->estTermine());
        self::assertFalse(StatutProgression::NOT_STARTED->estTermine());
    }

    public function testEstCommenceDesIN_PROGRESS(): void
    {
        self::assertFalse(StatutProgression::NOT_STARTED->estCommence());
        self::assertTrue(StatutProgression::IN_PROGRESS->estCommence());
        self::assertTrue(StatutProgression::COMPLETED->estCommence());
    }
}
