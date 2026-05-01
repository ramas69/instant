<?php

declare(strict_types=1);

namespace App\Certificat\Entity;

use App\Certificat\Repository\CertificatRepository;
use App\Cours\Entity\Cours;
use App\User\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Certificat de fin de formation, généré quand toutes les Lecons d'un Cours
 * sont marquées COMPLETED par l'élève.
 *
 * Le `code` est un identifiant URL-safe (12 caractères) utilisé pour la page
 * de vérification publique : /certificats/{code}. Pas d'auth requise pour
 * vérifier (preuve sociale).
 *
 * Un seul Certificat par paire (User, Cours).
 */
#[ORM\Entity(repositoryClass: CertificatRepository::class)]
#[ORM\Table(name: 'certificat')]
#[ORM\UniqueConstraint(name: 'uniq_certificat_eleve_cours', columns: ['eleve_id', 'cours_id'])]
class Certificat
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private User $eleve;

    #[ORM\ManyToOne(targetEntity: Cours::class)]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Cours $cours;

    /**
     * Code URL-safe de 12 caractères (ex : "k4PqM2nXR8tL"), unique global.
     * Sert à la page de vérification publique sans authentification.
     */
    #[ORM\Column(length: 32, unique: true)]
    #[Assert\NotBlank]
    #[Assert\Length(min: 8, max: 32)]
    private string $code;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $generatedAt;

    /**
     * Chemin relatif vers le PDF généré (ex : "certificats/2026/k4PqM2nXR8tL.pdf").
     * Nullable tant que le PDF n'a pas été généré.
     */
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pdfPath = null;

    public function __construct(User $eleve, Cours $cours, string $code)
    {
        $this->id = Uuid::v7();
        $this->eleve = $eleve;
        $this->cours = $cours;
        $this->code = $code;
        $this->generatedAt = new \DateTimeImmutable();
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getEleve(): User
    {
        return $this->eleve;
    }

    public function getCours(): Cours
    {
        return $this->cours;
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function getGeneratedAt(): \DateTimeImmutable
    {
        return $this->generatedAt;
    }

    public function getPdfPath(): ?string
    {
        return $this->pdfPath;
    }

    public function setPdfPath(?string $pdfPath): self
    {
        $this->pdfPath = $pdfPath;

        return $this;
    }
}
