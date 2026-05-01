<?php

declare(strict_types=1);

namespace App\Cours\Repository;

use App\Cours\Entity\Cours;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Cours>
 */
class CoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cours::class);
    }

    public function findOneBySlug(string $slug): ?Cours
    {
        return $this->findOneBy(['slug' => $slug]);
    }

    /**
     * @return array<int, Cours>
     */
    public function findAllPublished(): array
    {
        return $this->findBy(['isPublished' => true], ['ordre' => 'ASC']);
    }
}
