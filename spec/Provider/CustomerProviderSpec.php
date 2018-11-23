<?php

namespace spec\Sylius\AdminOrderCreationPlugin\Provider;

use InvalidArgumentException;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Repository\CustomerRepositoryInterface;
use Sylius\AdminOrderCreationPlugin\Provider\CustomerProvider;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Provider\CustomerProviderInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

class CustomerProviderSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(CustomerProvider::class);
    }

    function it_implements_customer_provider_interface()
    {
        $this->shouldImplement(CustomerProviderInterface::class);
    }

    function let(CustomerRepositoryInterface $customerRepository, FactoryInterface $customerFactory)
    {
        $this->beConstructedWith($customerRepository, $customerFactory);
    }

    function it_finds_a_customer_by_id(
        CustomerRepositoryInterface $customerRepository,
        CustomerInterface $customer
    ) {
        $customerRepository->find('1')->willReturn($customer);

        $this->provideExistingCustomer('1')->shouldReturn($customer);
    }

    function it_throws_an_exception_if_no_customer_was_found(
        CustomerRepositoryInterface $customerRepository
    ) {
        $customerRepository->find('2')->willReturn(null);

        $this->shouldThrow(InvalidArgumentException::class)
            ->during('provideExistingCustomer', ['2']);
    }

    function it_creates_a_customer_with_a_given_email(
        FactoryInterface $customerFactory,
        CustomerInterface $customer,
        CustomerRepositoryInterface $customerRepository
    ){
        $customerFactory->createNew()->willReturn($customer);

        $customer->setEmail('jon.doe@sylius.com')->shouldBeCalled();

        $customerRepository->add($customer)->shouldBeCalled();

        $this->provideNewCustomer('jon.doe@sylius.com')->shouldReturn($customer);
    }
}
