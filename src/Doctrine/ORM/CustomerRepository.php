<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Doctrine\ORM;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\CustomerRepository as BaseCustomerRepository;

final class CustomerRepository extends BaseCustomerRepository implements CustomerRepositoryInterface
{
    public function findByEmailPart(string $email): array
    {
        return $this
            ->_em
            ->createQueryBuilder()
            ->select('o.id', 'o.email')
            ->from($this->_entityName, 'o')
            ->andWhere('o.email LIKE :email')
            ->setParameter('email', '%' . $email . '%')
            ->getQuery()
            ->getResult()
        ;
    }
}
