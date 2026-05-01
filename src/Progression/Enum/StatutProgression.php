<?php

declare(strict_types=1);

namespace App\Progression\Enum;

/**
 * État de progression d'un élève sur une leçon.
 *
 * Le passage IN_PROGRESS est marqué dès que l'élève charge la page leçon.
 * Le passage COMPLETED est déclenché par un événement Vimeo "video ended"
 * (ou un bouton "Marquer comme terminée" en fallback).
 */
enum StatutProgression: string
{
    case NOT_STARTED = 'not_started';
    case IN_PROGRESS = 'in_progress';
    case COMPLETED = 'completed';

    public function estTermine(): bool
    {
        return self::COMPLETED === $this;
    }

    public function estCommence(): bool
    {
        return self::NOT_STARTED !== $this;
    }
}
