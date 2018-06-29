<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderType;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Sylius\Component\Shipping\Resolver\ShippingMethodsResolverInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class ProvideAvailableShippingMethodsAction
{
    /** @var OrderFactoryInterface */
    private $orderFactory;

    /** @var FormFactoryInterface */
    private $formFactory;

    /** @var OrderProcessorInterface */
    private $orderProcessor;

    /** @var ShippingMethodsResolverInterface */
    private $shippingMethodsResolver;

    public function __construct(
        OrderFactoryInterface $orderFactory,
        FormFactoryInterface $formFactory,
        OrderProcessorInterface $orderProcessor,
        ShippingMethodsResolverInterface $shippingMethodsResolver
    ) {
        $this->orderFactory = $orderFactory;
        $this->formFactory = $formFactory;
        $this->orderProcessor = $orderProcessor;
        $this->shippingMethodsResolver = $shippingMethodsResolver;
    }

    public function __invoke(Request $request): Response
    {
        $order = $this->orderFactory->createForCustomer($request->attributes->get('customerEmail'));

        $form = $this->formFactory->create(NewOrderType::class, $order);

        /** @var OrderInterface $order */
        $order = $form->handleRequest($request)->getData();
        $this->orderProcessor->process($order);

        $shipmentNumber = (int) $request->attributes->get('shipmentNumber');

        $shippingMethods = $this->shippingMethodsResolver->getSupportedMethods($order->getShipments()->get($shipmentNumber));
        $shippingMethodsOptions = [];

        foreach ($shippingMethods as $shippingMethod) {
            $shippingMethodsOptions[$shippingMethod->getCode()] = $shippingMethod->getName();
        }

        return new JsonResponse($shippingMethodsOptions);
    }
}
