<?php

declare(strict_types=1);

namespace App\Cours\Entity;

use App\Cours\Repository\CoursRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Une formation vendable de la plateforme Instant IA.
 *
 * Un Cours contient des Modules, qui eux-mêmes contiennent des Lecons.
 * Le prix est stocké en centimes (jamais en float) pour éviter toute imprécision.
 */
#[ORM\Entity(repositoryClass: CoursRepository::class)]
#[ORM\Table(name: 'cours')]
#[UniqueEntity(fields: ['slug'], message: 'Ce slug est déjà utilisé par un autre cours.')]
class Cours
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\Column(length: 200)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 200)]
    private string $titre;

    #[ORM\Column(length: 200, unique: true)]
    #[Assert\NotBlank]
    #[Assert\Regex(
        pattern: '/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
        message: 'Le slug doit être en kebab-case minuscule (lettres, chiffres, tirets).'
    )]
    #[Assert\Length(max: 200)]
    private string $slug;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank]
    private string $description;

    /**
     * Prix en centimes d'euros (ex : 14700 pour 147 €).
     */
    #[ORM\Column(type: 'integer')]
    #[Assert\PositiveOrZero]
    private int $prixCentimes;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isPublished = false;

    /**
     * Ordre d'affichage dans le catalogue (asc).
     */
    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ordre = 0;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    /**
     * @var Collection<int, Module>
     */
    #[ORM\OneToMany(mappedBy: 'cours', targetEntity: Module::class, cascade: ['persist'], orphanRemoval: true)]
    #[ORM\OrderBy(['ordre' => 'ASC'])]
    private Collection $modules;

    public function __construct(string $titre, string $slug, string $description, int $prixCentimes)
    {
        $this->id = Uuid::v7();
        $this->titre = $titre;
        $this->slug = $slug;
        $this->description = $description;
        $this->prixCentimes = $prixCentimes;
        $this->createdAt = new \DateTimeImmutable();
        $this->modules = new ArrayCollection();
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getTitre(): string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrixCentimes(): int
    {
        return $this->prixCentimes;
    }

    public function setPrixCentimes(int $prixCentimes): self
    {
        $this->prixCentimes = $prixCentimes;

        return $this;
    }

    public function isPublished(): bool
    {
        return $this->isPublished;
    }

    public function setIsPublished(bool $isPublished): self
    {
        $this->isPublished = $isPublished;

        return $this;
    }

    public function getOrdre(): int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    /**
     * @return Collection<int, Module>
     */
    public function getModules(): Collection
    {
        return $this->modules;
    }

    public function addModule(Module $module): self
    {
        if (!$this->modules->contains($module)) {
            $this->modules->add($module);
            $module->setCours($this);
        }

        return $this;
    }

    public function removeModule(Module $module): self
    {
        $this->modules->removeElement($module);

        return $this;
    }

    public function getNombreModules(): int
    {
        return $this->modules->count();
    }
}
