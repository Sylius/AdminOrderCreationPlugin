<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class ReorderShipmentProcessor implements ReorderProcessor
{
    /** @var FactoryInterface */
    private $shipmentFactory;

    public function __construct(FactoryInterface $shipmentFactory)
    {
        $this->shipmentFactory = $shipmentFactory;
    }

    public function process(OrderInterface $order, OrderInterface $reorder): void
    {
        if (!$order->hasShipments()) {
            return;
        }

        /** @var ShipmentInterface $shipment */
        foreach ($order->getShipments() as $shipment) {
            if (ShipmentInterface::STATE_CANCELLED === $shipment->getState()) {
                continue;
            }

            /** @var ShipmentInterface $newShipment */
            $newShipment = $this->shipmentFactory->createNew();
            $newShipment->setOrder($reorder);
            $newShipment->setMethod($shipment->getMethod());

            $reorder->addShipment($newShipment);
        }
    }
}
