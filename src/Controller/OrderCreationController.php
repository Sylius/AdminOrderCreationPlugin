<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\Bundle\CoreBundle\Controller\OrderController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class OrderCreationController extends OrderController
{
    public function selectNewOrderCustomerAction(Request $request): Response
    {
        return $this->render('@SyliusAdminOrderCreationPlugin/orderSelectCustomer.html.twig');
    }
}
