<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Doctrine\ORM;

use Doctrine\ORM\EntityManager;

trait CustomerRepositoryTrait
{
    /**
     * @return EntityManager
     */
    abstract protected function getEntityManager();

    /**
     * @return string
     */
    abstract protected function getEntityName();

    public function findByEmailPart(string $email): array
    {
        return $this
            ->getEntityManager()
            ->createQueryBuilder()
            ->select('o.id', 'o.email')
            ->from($this->getEntityName(), 'o')
            ->andWhere('o.email LIKE :email')
            ->setParameter('email', '%' . $email . '%')
            ->getQuery()
            ->getResult()
        ;
    }
}
