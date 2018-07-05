<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\ReorderProcessing\ReorderProcessor;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Core\Model\ShippingMethodInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class ReorderShipmentProcessorSpec extends ObjectBehavior
{
    function let(FactoryInterface $shipmentFactory): void
    {
        $this->beConstructedWith($shipmentFactory);
    }

    function it_implements_reorder_processor_interface(): void
    {
        $this->shouldImplement(ReorderProcessor::class);
    }

    function it_copies_shipment_from_existing_order_to_reorder_instance(
        FactoryInterface $shipmentFactory,
        OrderInterface $order,
        OrderInterface $reorder,
        ShipmentInterface $shipment,
        ShipmentInterface $newShipment,
        ShippingMethodInterface $shippingMethod
    ): void {
        $order->hasShipments()->willReturn(true);
        $order->getShipments()->willReturn(new ArrayCollection([$shipment->getWrappedObject()]));

        $shipment->getState()->willReturn(ShipmentInterface::STATE_SHIPPED);
        $shipment->getMethod()->willReturn($shippingMethod);

        $shipmentFactory->createNew()->willReturn($newShipment);
        $newShipment->setOrder($reorder)->shouldBeCalled();
        $newShipment->setMethod($shippingMethod)->shouldBeCalled();

        $reorder->addShipment($newShipment)->shouldBeCalled();

        $this->process($order, $reorder);
    }
}
