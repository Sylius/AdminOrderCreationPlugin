<?php

namespace spec\Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\ReorderProcessing\ReorderProcessor;
use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;

final class ReorderDataProcessorSpec extends ObjectBehavior
{
    function it_implements_reorder_processor_interface(): void
    {
        $this->shouldImplement(ReorderProcessor::class);
    }

    function it_copies_basic_order_data_to_reorder_instance(
        OrderInterface $order,
        OrderInterface $reorder,
        ChannelInterface $channel,
        CustomerInterface $customer,
        AddressInterface $shippingAddress,
        AddressInterface $billingAddress
    ): void {
        $order->getChannel()->willReturn($channel);
        $order->getCustomer()->willReturn($customer);
        $order->getCurrencyCode()->willReturn('USD');
        $order->getLocaleCode()->willReturn('en_US');
        $order->getNotes()->willReturn('test_notes');
        $order->getShippingAddress()->willReturn($shippingAddress);
        $order->getBillingAddress()->willReturn($billingAddress);

        $reorder->setChannel($channel)->shouldBeCalled();
        $reorder->setCustomer($customer)->shouldBeCalled();
        $reorder->setCurrencyCode('USD')->shouldBeCalled();
        $reorder->setLocaleCode('en_US')->shouldBeCalled();
        $reorder->setNotes('test_notes')->shouldBeCalled();
        $reorder->setBillingAddress($billingAddress)->shouldBeCalled();
        $reorder->setShippingAddress($shippingAddress)->shouldBeCalled();

        $this->process($order, $reorder);
    }
}
