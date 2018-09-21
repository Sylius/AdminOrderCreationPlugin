<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Provider;

use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\CustomerRepository;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class CustomerProvider implements CustomerProviderInterface
{
    /** @var CustomerRepository */
    private $customerRepository;

    /** @var FactoryInterface */
    private $customerFactory;

    public function __construct(
        CustomerRepository $customerRepository,
        FactoryInterface $customerFactory
    ) {
        $this->customerRepository = $customerRepository;
        $this->customerFactory = $customerFactory;
    }

    /** {@inheritdoc}  */
    public function provideExistingCustomer(string $id): CustomerInterface
    {
        $customer = $this->customerRepository->find($id);
        assert($customer instanceof CustomerInterface);

        return $customer;
    }

    /** {@inheritdoc}  */
    public function provideNewCustomer(string $email): CustomerInterface
    {
        $customer = $this->customerFactory->createNew();
        assert($customer instanceof CustomerInterface);

        $customer->setEmail($email);

        assert($customer instanceof CustomerInterface);

        $this->customerRepository->add($customer);

        return $customer;
    }
}