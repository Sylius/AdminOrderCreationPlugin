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
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class OrderFactorySpec extends ObjectBehavior
{
    function let(
        FactoryInterface $baseOrderFactory,
        FactoryInterface $customerFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        RepositoryInterface $currencyRepository,
        RepositoryInterface $localeRepository,
        ReorderProcessor $reorderProcessor
    ) {
        $this->beConstructedWith(
            $baseOrderFactory,
            $customerFactory,
            $customerRepository,
            $channelRepository,
            $currencyRepository,
            $localeRepository,
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
        RepositoryInterface $currencyRepository,
        RepositoryInterface $localeRepository,
        OrderInterface $order,
        CustomerInterface $customer,
        ChannelInterface $channel,
        CurrencyInterface $currency,
        LocaleInterface $locale
    ): void {
        $baseOrderFactory->createNew()->willReturn($order);
        $customerRepository->findOneBy(['email' => 'customer@example.com'])->willReturn($customer);
        $channelRepository->findOneBy(['enabled' => true])->willReturn($channel);

        $currencyRepository->findOneBy([])->willReturn($currency);
        $currency->getCode()->willReturn('USD');

        $localeRepository->findOneBy([])->willReturn($locale);
        $locale->getCode()->willReturn('en_US');

        $order->setCustomer($customer)->shouldBeCalled();
        $order->setChannel($channel)->shouldBeCalled();
        $order->setCurrencyCode('USD')->shouldBeCalled();
        $order->setLocaleCode('en_US')->shouldBeCalled();

        $this->createForCustomer('customer@example.com')->shouldReturn($order);
    }

    function it_creates_order_for_new_customer_with_default_channel_locale_and_currency(
        FactoryInterface $baseOrderFactory,
        FactoryInterface $customerFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        RepositoryInterface $currencyRepository,
        RepositoryInterface $localeRepository,
        OrderInterface $order,
        CustomerInterface $customer,
        ChannelInterface $channel,
        CurrencyInterface $currency,
        LocaleInterface $locale
    ): void {
        $baseOrderFactory->createNew()->willReturn($order);
        $customerRepository->findOneBy(['email' => 'customer@example.com'])->willReturn(null);

        $customerFactory->createNew()->willReturn($customer);
        $customer->setEmail('customer@example.com')->shouldBeCalled();

        $channelRepository->findOneBy(['enabled' => true])->willReturn($channel);

        $currencyRepository->findOneBy([])->willReturn($currency);
        $currency->getCode()->willReturn('USD');

        $localeRepository->findOneBy([])->willReturn($locale);
        $locale->getCode()->willReturn('en_US');

        $order->setCustomer($customer)->shouldBeCalled();
        $order->setChannel($channel)->shouldBeCalled();
        $order->setCurrencyCode('USD')->shouldBeCalled();
        $order->setLocaleCode('en_US')->shouldBeCalled();

        $this->createForCustomer('customer@example.com')->shouldReturn($order);
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
