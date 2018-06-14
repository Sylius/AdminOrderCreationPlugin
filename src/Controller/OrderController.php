<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\Bundle\CoreBundle\Controller\OrderController as BaseOrderController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class OrderController extends BaseOrderController
{
    public function previewAction(Request $request): Response
    {
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

        $newResource = $this->newResourceFactory->create($configuration, $this->factory);
        $form = $this->resourceFormFactory->create($configuration, $newResource);

        $order = $form->handleRequest($request)->getData();

        $this->get('sylius.order_processing.order_processor')->process($order);

        return $this->render('@SyliusAdminOrderCreationPlugin/orderPreview.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
    }
}
