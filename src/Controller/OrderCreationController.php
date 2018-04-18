<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderCustomerSelectType;
use Sylius\Bundle\CoreBundle\Controller\OrderController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class OrderCreationController extends OrderController
{
    public function selectNewOrderCustomerAction(Request $request): Response
    {
        $selectCustomerForm = $this->get('form.factory')->create(NewOrderCustomerSelectType::class);

        return $this->render('@SyliusAdminOrderCreationPlugin/orderSelectCustomer.html.twig', [
            'form' => $selectCustomerForm->createView(),
        ]);
    }
}
