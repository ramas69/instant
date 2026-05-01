<?php

declare(strict_types=1);

namespace App\Achat\Repository;

use App\Achat\Entity\Achat;
use App\Achat\Enum\StatutAchat;
use App\Cours\Entity\Cours;
use App\User\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Achat>
 */
class AchatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Achat::class);
    }

    public function findOneByStripeSessionId(string $stripeSessionId): ?Achat
    {
        return $this->findOneBy(['stripeSessionId' => $stripeSessionId]);
    }

    /**
     * Indique si l'utilisateur a payé (et conservé) un cours donné.
     * Utilisé par le voter d'accès aux leçons.
     */
    public function aAcheteCours(User $user, Cours $cours): bool
    {
        return null !== $this->findOneBy([
            'acheteur' => $user,
            'cours' => $cours,
            'statut' => StatutAchat::PAID,
        ]);
    }
}
