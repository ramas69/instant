<?php

declare(strict_types=1);

namespace App\Progression\Entity;

use App\Cours\Entity\Lecon;
use App\Progression\Enum\StatutProgression;
use App\Progression\Repository\ProgressionRepository;
use App\User\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;

/**
 * Suivi de progression d'un User sur une Lecon donnée.
 *
 * Un seul enregistrement par paire (User, Lecon) — contrainte d'unicité.
 * Le passage IN_PROGRESS est marqué dès que l'élève charge la page leçon ;
 * le passage COMPLETED est déclenché par un événement Vimeo "video ended"
 * ou un bouton "Marquer comme terminée".
 */
#[ORM\Entity(repositoryClass: ProgressionRepository::class)]
#[ORM\Table(name: 'progression')]
#[ORM\UniqueConstraint(name: 'uniq_progression_eleve_lecon', columns: ['eleve_id', 'lecon_id'])]
class Progression
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private User $eleve;

    #[ORM\ManyToOne(targetEntity: Lecon::class)]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Lecon $lecon;

    #[ORM\Column(type: 'string', length: 16, enumType: StatutProgression::class)]
    private StatutProgression $statut = StatutProgression::NOT_STARTED;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $lastViewedAt = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $completedAt = null;

    public function __construct(User $eleve, Lecon $lecon)
    {
        $this->id = Uuid::v7();
        $this->eleve = $eleve;
        $this->lecon = $lecon;
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getEleve(): User
    {
        return $this->eleve;
    }

    public function getLecon(): Lecon
    {
        return $this->lecon;
    }

    public function getStatut(): StatutProgression
    {
        return $this->statut;
    }

    /**
     * Marque la leçon comme vue (l'élève a chargé la page).
     * Idempotent — le statut COMPLETED n'est pas régressé.
     */
    public function marquerVue(): self
    {
        $this->lastViewedAt = new \DateTimeImmutable();

        if (StatutProgression::NOT_STARTED === $this->statut) {
            $this->statut = StatutProgression::IN_PROGRESS;
        }

        return $this;
    }

    /**
     * Marque la leçon comme terminée. Idempotent.
     */
    public function marquerTerminee(): self
    {
        if (StatutProgression::COMPLETED !== $this->statut) {
            $this->statut = StatutProgression::COMPLETED;
            $this->completedAt = new \DateTimeImmutable();
        }

        return $this;
    }

    public function getLastViewedAt(): ?\DateTimeImmutable
    {
        return $this->lastViewedAt;
    }

    public function getCompletedAt(): ?\DateTimeImmutable
    {
        return $this->completedAt;
    }
}
