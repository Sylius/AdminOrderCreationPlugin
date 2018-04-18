<?php

namespace spec\Sylius\AdminOrderCreationPlugin\Factory;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Repository\CustomerRepositoryInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class OrderFactorySpec extends ObjectBehavior
{
    function let(FactoryInterface $defaultFactory, CustomerRepositoryInterface $customerRepository)
    {
        $this->beConstructedWith($defaultFactory, $customerRepository);
    }

    function it_implements_order_factory_interface()
    {
        $this->shouldImplement(OrderFactoryInterface::class);
    }

    function it_delegates_creating_new_order(FactoryInterface $defaultFactory, OrderInterface $order)
    {
        $defaultFactory->createNew()->willReturn($order);

        $this->createNew()->shouldReturn($order);
    }

    function it_creates_order_for_customer_with_specific_email(
        FactoryInterface $defaultFactory,
        CustomerRepositoryInterface $customerRepository,
        OrderInterface $order,
        CustomerInterface $customer
    ) {
        $defaultFactory->createNew()->willReturn($order);
        $customerRepository->findOneBy(['email' => 'customer@example.com'])->willReturn($customer);

        $order->setCustomer($customer)->shouldBeCalled();

        $this->createForCustomer('customer@example.com')->shouldReturn($order);
    }

    function it_throws_exception_if_there_is_no_customer_with_passed_email(CustomerRepositoryInterface $customerRepository)
    {
        $customerRepository->findOneBy(['email' => 'customer@example.com'])->willReturn(null);

        $this
            ->shouldThrow(\InvalidArgumentException::class)
            ->during('createForCustomer', ['customer@example.com'])
        ;
    }
}
