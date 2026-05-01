<?php

declare(strict_types=1);

namespace App\Progression\Repository;

use App\Cours\Entity\Lecon;
use App\Progression\Entity\Progression;
use App\User\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Progression>
 */
class ProgressionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Progression::class);
    }

    public function findOneByEleveAndLecon(User $eleve, Lecon $lecon): ?Progression
    {
        return $this->findOneBy(['eleve' => $eleve, 'lecon' => $lecon]);
    }
}
