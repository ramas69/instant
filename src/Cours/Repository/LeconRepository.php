<?php

declare(strict_types=1);

namespace App\Cours\Repository;

use App\Cours\Entity\Lecon;
use App\Cours\Entity\Module;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Lecon>
 */
class LeconRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Lecon::class);
    }

    public function findOneBySlugInModule(Module $module, string $slug): ?Lecon
    {
        return $this->findOneBy(['module' => $module, 'slug' => $slug]);
    }
}
