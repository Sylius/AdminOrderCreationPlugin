<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\Recalculator;

use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\AdminOrderCreationPlugin\Entity\OrderItem;
use Sylius\Component\Core\Calculator\ProductVariantPriceCalculatorInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Customer\Model\CustomerGroupInterface;
use Sylius\Component\Order\Model\OrderInterface as BaseOrderInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;

final class OrderPricesRecalculatorSpec extends ObjectBehavior
{
    function let(ProductVariantPriceCalculatorInterface $productVariantPriceCalculator): void
    {
        $this->beConstructedWith($productVariantPriceCalculator);
    }

    function it_is_an_order_processor(): void
    {
        $this->shouldImplement(OrderProcessorInterface::class);
    }

    function it_uses_custom_unit_price_for_order_item_if_set(
        CustomerGroupInterface $group,
        CustomerInterface $customer,
        OrderInterface $order,
        OrderItem $item
    ): void {
        $order->getCustomer()->willReturn($customer);
        $order->getChannel()->willReturn(null);
        $order->getItems()->willReturn(new ArrayCollection([$item->getWrappedObject()]));
        $order->getCurrencyCode()->willReturn(null);

        $customer->getGroup()->willReturn($group);

        $item->getCustomUnitPrice()->willReturn(300);
        $item->setUnitPrice(300)->shouldBeCalled();

        $this->process($order);
    }

    function it_recalculates_prices_adding_customer_to_the_context(
        ChannelInterface $channel,
        CustomerGroupInterface $group,
        CustomerInterface $customer,
        OrderInterface $order,
        OrderItem $item,
        ProductVariantInterface $variant,
        ProductVariantPriceCalculatorInterface $productVariantPriceCalculator
    ): void {
        $order->getCustomer()->willReturn($customer);
        $order->getChannel()->willReturn(null);
        $order->getItems()->willReturn(new ArrayCollection([$item->getWrappedObject()]));
        $order->getCurrencyCode()->willReturn(null);

        $customer->getGroup()->willReturn($group);

        $item->getCustomUnitPrice()->willReturn(null);
        $item->isImmutable()->willReturn(false);
        $item->getQuantity()->willReturn(5);
        $item->getVariant()->willReturn($variant);

        $order->getChannel()->willReturn($channel);

        $productVariantPriceCalculator
            ->calculate($variant, ['channel' => $channel])
            ->willReturn(10)
        ;
        $item->setUnitPrice(10)->shouldBeCalled();

        $this->process($order);
    }

    function it_throws_exception_if_passed_order_is_not_a_core_order(BaseOrderInterface $order): void
    {
        $this
            ->shouldThrow(\Exception::class)
            ->during('process', [$order])
        ;
    }
}
