<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\Factory;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\AdminOrderCreationPlugin\ReorderProcessing\ReorderProcessor;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Repository\CustomerRepositoryInterface;
use Sylius\Component\Currency\Model\CurrencyInterface;
use Sylius\Component\Locale\Model\LocaleInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class OrderFactorySpec extends ObjectBehavior
{
    function let(
        FactoryInterface $baseOrderFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        ReorderProcessor $reorderProcessor
    ) {
        $this->beConstructedWith(
            $baseOrderFactory,
            $customerRepository,
            $channelRepository,
            $reorderProcessor
        );
    }

    function it_implements_order_factory_interface(): void
    {
        $this->shouldImplement(OrderFactoryInterface::class);
    }

    function it_delegates_creating_new_order(FactoryInterface $baseOrderFactory, OrderInterface $order): void
    {
        $baseOrderFactory->createNew()->willReturn($order);

        $this->createNew()->shouldReturn($order);
    }

    function it_creates_order_for_customer_with_default_channel_locale_and_currency(
        FactoryInterface $baseOrderFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        OrderInterface $order,
        CustomerInterface $customer,
        ChannelInterface $channel,
        CurrencyInterface $currency,
        LocaleInterface $locale
    ): void {
        $baseOrderFactory->createNew()->willReturn($order);

        $customerRepository->find(1)->willReturn($customer);
        $channelRepository->findOneByCode('WEB-US')->willReturn($channel);

        $channel->getBaseCurrency()->willReturn($currency);
        $currency->getCode()->willReturn('USD');

        $channel->getDefaultLocale()->willReturn($locale);
        $locale->getCode()->willReturn('en_US');

        $order->setCustomer($customer)->shouldBeCalled();
        $order->setChannel($channel)->shouldBeCalled();
        $order->setCurrencyCode('USD')->shouldBeCalled();
        $order->setLocaleCode('en_US')->shouldBeCalled();

        $this->createForCustomerAndChannel('1', 'WEB-US')->shouldReturn($order);
    }

    function it_throws_an_exception_if_the_customer_does_not_exist(
        FactoryInterface $baseOrderFactory,
        CustomerRepositoryInterface $customerRepository
    ): void {
        $customerRepository->find(1)->willReturn(null);

        $baseOrderFactory->createNew()->shouldNotBeCalled();

        $this->shouldThrow(InvalidArgumentException::class)
            ->during('createForCustomerAndChannel', ['1', 'WEB-US']);
    }

    function it_creates_reorder_from_an_existing_order(
        FactoryInterface $baseOrderFactory,
        ReorderProcessor $reorderProcessor,
        OrderInterface $order,
        OrderInterface $reorder
    ): void {
        $baseOrderFactory->createNew()->willReturn($reorder);

        $reorderProcessor->process($order, $reorder)->shouldBeCalled();

        $this->createFromExistingOrder($order);
    }
}
