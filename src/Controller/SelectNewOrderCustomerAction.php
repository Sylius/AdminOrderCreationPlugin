<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderCustomerSelectType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

final class SelectNewOrderCustomerAction
{
    /** @var FormFactoryInterface */
    private $formFactory;

    /** @var Environment */
    private $twig;

    public function __construct(FormFactoryInterface $formFactory, Environment $twig)
    {
        $this->formFactory = $formFactory;
        $this->twig = $twig;
    }

    public function __invoke(Request $request): Response
    {
        $selectCustomerForm = $this->formFactory->create(NewOrderCustomerSelectType::class);

        return new Response($this->twig->render('@SyliusAdminOrderCreationPlugin/orderSelectCustomer.html.twig', [
            'form' => $selectCustomerForm->createView(),
        ]));
    }
}
