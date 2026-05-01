<?php

declare(strict_types=1);

namespace App\Cours\Entity;

use App\Cours\Repository\ModuleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Regroupement logique de Lecons à l'intérieur d'un Cours.
 *
 * Ex : Module "Fondations Claude" → 3 Lecons. Module "Automatisations" → 5 Lecons.
 */
#[ORM\Entity(repositoryClass: ModuleRepository::class)]
#[ORM\Table(name: 'module')]
class Module
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\Column(length: 200)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 200)]
    private string $titre;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ordre = 0;

    #[ORM\ManyToOne(targetEntity: Cours::class, inversedBy: 'modules')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Cours $cours;

    /**
     * @var Collection<int, Lecon>
     */
    #[ORM\OneToMany(mappedBy: 'module', targetEntity: Lecon::class, cascade: ['persist'], orphanRemoval: true)]
    #[ORM\OrderBy(['ordre' => 'ASC'])]
    private Collection $lecons;

    public function __construct(string $titre, Cours $cours, int $ordre = 0)
    {
        $this->id = Uuid::v7();
        $this->titre = $titre;
        $this->cours = $cours;
        $this->ordre = $ordre;
        $this->lecons = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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

    public function getCours(): Cours
    {
        return $this->cours;
    }

    public function setCours(Cours $cours): self
    {
        $this->cours = $cours;

        return $this;
    }

    /**
     * @return Collection<int, Lecon>
     */
    public function getLecons(): Collection
    {
        return $this->lecons;
    }

    public function addLecon(Lecon $lecon): self
    {
        if (!$this->lecons->contains($lecon)) {
            $this->lecons->add($lecon);
            $lecon->setModule($this);
        }

        return $this;
    }

    public function removeLecon(Lecon $lecon): self
    {
        $this->lecons->removeElement($lecon);

        return $this;
    }
}
