<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Application\Doctrine\ORM;

use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\CustomerRepositoryInterface;
use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\CustomerRepositoryTrait;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\CustomerRepository as BaseCustomerRepository;

final class CustomerRepository extends BaseCustomerRepository implements CustomerRepositoryInterface
{
    use CustomerRepositoryTrait;
}
