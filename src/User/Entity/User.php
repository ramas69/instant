<?php

declare(strict_types=1);

namespace App\User\Entity;

use App\Shared\Enum\RoleUtilisateur;
use App\User\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Compte utilisateur de la plateforme Instant IA.
 *
 * Cette entité reste volontairement minimale au Sprint 1 (email + password + roles).
 * Les champs `prenom`, `nom`, et autres champs profil seront ajoutés au Sprint 2
 * lors de la mise en place du formulaire d'inscription.
 *
 * Naming exception : on garde `User` (et non `Utilisateur`) pour rester aligné
 * avec la convention Symfony Security et toute la documentation associée
 * (cf. décision #005).
 */
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'utilisateur')]
#[UniqueEntity(fields: ['email'], message: 'Cette adresse email est déjà utilisée.')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\Column(length: 180, unique: true)]
    #[Assert\NotBlank(message: 'Saisis ton email.')]
    #[Assert\Email(message: 'Cet email n\'est pas valide.')]
    #[Assert\Length(max: 180)]
    private string $email;

    /**
     * Mot de passe HACHÉ (argon2id, configuré dans security.yaml).
     * Ne JAMAIS exposer en clair, ni dans les logs, ni dans les fixtures.
     */
    #[ORM\Column(length: 255)]
    private string $password;

    /**
     * Liste des rôles applicatifs au format Symfony Security (`ROLE_*`).
     *
     * @var list<string>
     */
    #[ORM\Column(type: 'json')]
    private array $roles = [];

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isVerified = false;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    public function __construct(string $email, string $hashedPassword)
    {
        $this->id = Uuid::v7();
        $this->email = $email;
        $this->password = $hashedPassword;
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Identifiant unique pour Symfony Security (utilisé pour l'authentification).
     *
     * @return non-empty-string
     */
    public function getUserIdentifier(): string
    {
        \assert('' !== $this->email);

        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $hashedPassword): self
    {
        $this->password = $hashedPassword;

        return $this;
    }

    /**
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // Tout user authentifié reçoit ROLE_USER, peu importe ses autres rôles.
        $roles[] = RoleUtilisateur::USER->value;

        return array_values(array_unique($roles));
    }

    /**
     * @param list<RoleUtilisateur> $roles
     */
    public function setRoles(array $roles): self
    {
        $this->roles = array_map(static fn (RoleUtilisateur $r) => $r->value, $roles);

        return $this;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    /**
     * Aucune donnée sensible temporaire (plain password) n'est stockée sur l'entité,
     * donc rien à effacer. Méthode imposée par UserInterface.
     */
    public function eraseCredentials(): void
    {
    }
}
