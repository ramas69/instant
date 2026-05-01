<?php

declare(strict_types=1);

namespace App\Cours\Entity;

use App\Cours\Repository\LeconRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Une leçon individuelle, contenue dans un Module.
 *
 * Une Lecon embarque un identifiant Vimeo (la vidéo est hébergée chez Vimeo Pro)
 * et un contenu textuel optionnel (notes, transcript, ressources liées).
 *
 * Le slug est unique par Module (ex : un slug "introduction" peut exister dans
 * plusieurs modules différents).
 */
#[ORM\Entity(repositoryClass: LeconRepository::class)]
#[ORM\Table(name: 'lecon')]
#[ORM\UniqueConstraint(name: 'uniq_lecon_slug_par_module', columns: ['module_id', 'slug'])]
class Lecon
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\Column(length: 200)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 200)]
    private string $titre;

    #[ORM\Column(length: 200)]
    #[Assert\NotBlank]
    #[Assert\Regex(
        pattern: '/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
        message: 'Le slug doit être en kebab-case minuscule (lettres, chiffres, tirets).',
    )]
    #[Assert\Length(max: 200)]
    private string $slug;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ordre = 0;

    /**
     * Identifiant numérique Vimeo de la vidéo. Nullable tant que la vidéo
     * n'est pas tournée/uploadée. Ex : "1029384756".
     */
    #[ORM\Column(length: 32, nullable: true)]
    private ?string $vimeoId = null;

    /**
     * Contenu textuel optionnel : notes de la leçon, transcript, ressources.
     */
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $contenu = null;

    #[ORM\ManyToOne(targetEntity: Module::class, inversedBy: 'lecons')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Module $module;

    public function __construct(string $titre, string $slug, Module $module, int $ordre = 0)
    {
        $this->id = Uuid::v7();
        $this->titre = $titre;
        $this->slug = $slug;
        $this->module = $module;
        $this->ordre = $ordre;
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

    public function getOrdre(): int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getVimeoId(): ?string
    {
        return $this->vimeoId;
    }

    public function setVimeoId(?string $vimeoId): self
    {
        $this->vimeoId = $vimeoId;

        return $this;
    }

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(?string $contenu): self
    {
        $this->contenu = $contenu;

        return $this;
    }

    public function getModule(): Module
    {
        return $this->module;
    }

    public function setModule(Module $module): self
    {
        $this->module = $module;

        return $this;
    }
}
