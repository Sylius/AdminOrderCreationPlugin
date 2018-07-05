<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Provider;

use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Shipping\Resolver\ShippingMethodsResolverInterface;

final class AvailableShippingMethodsListProvider
{
    /** @var ShippingMethodsResolverInterface */
    private $shippingMethodsResolver;

    public function __construct(ShippingMethodsResolverInterface $shippingMethodsResolver)
    {
        $this->shippingMethodsResolver = $shippingMethodsResolver;
    }

    public function __invoke(ShipmentInterface $shipment): array
    {
        $shippingMethods = $this->shippingMethodsResolver->getSupportedMethods($shipment);
        $shippingMethodsList = [];

        foreach ($shippingMethods as $shippingMethod) {
            $shippingMethodsList[$shippingMethod->getCode()] = $shippingMethod->getName();
        }

        return $shippingMethodsList;
    }
}
