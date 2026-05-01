<?php

declare(strict_types=1);

namespace App\Achat\Entity;

use App\Achat\Enum\StatutAchat;
use App\Achat\Repository\AchatRepository;
use App\Cours\Entity\Cours;
use App\User\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Achat d'une formation par un User, traçable côté Stripe via stripeSessionId.
 *
 * Un Achat passe par les états : PENDING (session Stripe créée) → PAID (webhook OK)
 * ou FAILED (paiement échoué). Un PAID peut transiter en REFUNDED si le client
 * exerce sa garantie 14 jours.
 */
#[ORM\Entity(repositoryClass: AchatRepository::class)]
#[ORM\Table(name: 'achat')]
#[ORM\Index(name: 'idx_achat_stripe_session', columns: ['stripe_session_id'])]
class Achat
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    private Uuid $id;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private User $acheteur;

    #[ORM\ManyToOne(targetEntity: Cours::class)]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Cours $cours;

    /**
     * Montant payé en centimes (figé au moment de l'achat — ne suit pas les
     * changements de prix futurs sur le Cours).
     */
    #[ORM\Column(type: 'integer')]
    #[Assert\PositiveOrZero]
    private int $montantCentimes;

    /**
     * ID de la Checkout Session Stripe (ex : "cs_test_a1b2c3...").
     * Indexé pour retrouver rapidement l'achat depuis un webhook.
     */
    #[ORM\Column(length: 128, unique: true)]
    private string $stripeSessionId;

    #[ORM\Column(type: 'string', length: 16, enumType: StatutAchat::class)]
    private StatutAchat $statut = StatutAchat::PENDING;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $paidAt = null;

    public function __construct(User $acheteur, Cours $cours, int $montantCentimes, string $stripeSessionId)
    {
        $this->id = Uuid::v7();
        $this->acheteur = $acheteur;
        $this->cours = $cours;
        $this->montantCentimes = $montantCentimes;
        $this->stripeSessionId = $stripeSessionId;
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getAcheteur(): User
    {
        return $this->acheteur;
    }

    public function getCours(): Cours
    {
        return $this->cours;
    }

    public function getMontantCentimes(): int
    {
        return $this->montantCentimes;
    }

    public function getStripeSessionId(): string
    {
        return $this->stripeSessionId;
    }

    public function getStatut(): StatutAchat
    {
        return $this->statut;
    }

    /**
     * Marque l'achat comme payé. Idempotent : un second appel avec PAID ne
     * change pas paidAt si déjà set.
     */
    public function marquerPaye(): self
    {
        if (StatutAchat::PAID !== $this->statut) {
            $this->statut = StatutAchat::PAID;
            $this->paidAt = new \DateTimeImmutable();
        }

        return $this;
    }

    public function marquerEchoue(): self
    {
        $this->statut = StatutAchat::FAILED;

        return $this;
    }

    public function marquerRembourse(): self
    {
        $this->statut = StatutAchat::REFUNDED;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getPaidAt(): ?\DateTimeImmutable
    {
        return $this->paidAt;
    }
}
