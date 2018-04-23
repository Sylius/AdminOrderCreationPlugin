<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;

use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderCustomerSelectType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Templating\EngineInterface;

final class SelectNewOrderCustomerAction
{
    /** @var FormFactoryInterface */
    private $formFactory;

    /** @var EngineInterface */
    private $templating;

    /**
     * @param FormFactoryInterface $formFactory
     * @param EngineInterface $templating
     */
    public function __construct(FormFactoryInterface $formFactory, EngineInterface $templating)
    {
        $this->formFactory = $formFactory;
        $this->templating = $templating;
    }

    public function __invoke(Request $request): Response
    {
        $selectCustomerForm = $this->formFactory->create(NewOrderCustomerSelectType::class);

        return new Response($this->templating->render('@SyliusAdminOrderCreationPlugin/orderSelectCustomer.html.twig', [
            'form' => $selectCustomerForm->createView(),
        ]));
    }
}
