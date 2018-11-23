<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\AdminOrderCreationPlugin\Preparator\OrderPreparatorInterface;
use Sylius\AdminOrderCreationPlugin\Provider\AvailableShippingMethodsListProvider;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class ProvideAvailableShippingMethodsAction
{
    /** @var OrderPreparatorInterface */
    private $orderPreparator;

    /** @var AvailableShippingMethodsListProvider */
    private $availableShippingMethodsListProvider;

    public function __construct(
        OrderPreparatorInterface $orderPreparator,
        AvailableShippingMethodsListProvider $availableShippingMethodsListProvider
    ) {
        $this->orderPreparator = $orderPreparator;
        $this->availableShippingMethodsListProvider = $availableShippingMethodsListProvider;
    }

    public function __invoke(Request $request): Response
    {
        $order = $this->orderPreparator->prepareFromRequest($request);
        $shipment = $order->getShipments()->get((int) $request->attributes->get('shipmentNumber'));

        if ($shipment === null) {
            return new JsonResponse([]);
        }

        return new JsonResponse($this->availableShippingMethodsListProvider->__invoke($shipment));
    }
}
