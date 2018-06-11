<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Doctrine\ORM;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\CustomerRepository as BaseCustomerRepository;

final class CustomerRepository extends BaseCustomerRepository
{
    public function findByEmailPart(string $email): array
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.email LIKE :email')
            ->setParameter('email', '%' . $email . '%')
            ->getQuery()
            ->getResult()
        ;
    }
}
