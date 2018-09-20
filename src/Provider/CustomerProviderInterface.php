<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Provider;

use Sylius\Component\Core\Model\CustomerInterface;

interface CustomerProviderInterface
{
    /**
     * Loads an existing customer from the database and throws an error if it does not exist
     *
     * @param string $id
     *
     * @return CustomerInterface
     */
    public function provideExistingCustomer(string $id): CustomerInterface;

    /**
     * Creates a new customer with a given email address
     *
     * @param string $email
     *
     * @return CustomerInterface
     */
    public function provideNewCustomer(string $email): CustomerInterface;
}
