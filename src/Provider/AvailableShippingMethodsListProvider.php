<?php

namespace Sylius\AdminOrderCreationPlugin\Provider;

use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\Component\Shipping\Resolver\ShippingMethodsResolverInterface;

final class AvailableShippingMethodsListProvider
{
    /** @var ShippingMethodsResolverInterface */
    private $shippingMethodsResolver;

    public function __construct(ShippingMethodsResolverInterface $shippingMethodsResolver)
    {
        $this->shippingMethodsResolver = $shippingMethodsResolver;
    }

    public function __invoke(OrderInterface $order, int $shipmentNumber): array
    {
        $shippingMethods = $this->shippingMethodsResolver->getSupportedMethods($order->getShipments()->get($shipmentNumber));
        $shippingMethodsList = [];

        foreach ($shippingMethods as $shippingMethod) {
            $shippingMethodsList[$shippingMethod->getCode()] = $shippingMethod->getName();
        }

        return $shippingMethodsList;
    }
}
