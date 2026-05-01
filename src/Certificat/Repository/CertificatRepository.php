<?php

declare(strict_types=1);

namespace App\Certificat\Repository;

use App\Certificat\Entity\Certificat;
use App\Cours\Entity\Cours;
use App\User\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Certificat>
 */
class CertificatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Certificat::class);
    }

    public function findOneByCode(string $code): ?Certificat
    {
        return $this->findOneBy(['code' => $code]);
    }

    public function findOneByEleveAndCours(User $eleve, Cours $cours): ?Certificat
    {
        return $this->findOneBy(['eleve' => $eleve, 'cours' => $cours]);
    }
}
