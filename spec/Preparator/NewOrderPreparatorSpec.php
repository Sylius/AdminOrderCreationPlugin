<?php

namespace spec\Sylius\AdminOrderCreationPlugin\Preparator;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderType;
use Sylius\AdminOrderCreationPlugin\Preparator\OrderPreparatorInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\ParameterBag;
use Symfony\Component\HttpFoundation\Request;

final class NewOrderPreparatorSpec extends ObjectBehavior
{
    function let(
        OrderFactoryInterface $orderFactory,
        FormFactoryInterface $formFactory,
        OrderProcessorInterface $orderProcessor
    ) {
        $this->beConstructedWith($orderFactory, $formFactory, $orderProcessor);
    }

    function it_is_order_preparator()
    {
        $this->shouldImplement(OrderPreparatorInterface::class);
    }

    function it_prepares_new_order_basing_on_request_data(
        OrderFactoryInterface $orderFactory,
        FormFactoryInterface $formFactory,
        OrderProcessorInterface $orderProcessor,
        Request $request,
        OrderInterface $order,
        OrderInterface $orderWithData,
        FormInterface $form
    ) {
        $request->attributes = new ParameterBag(['customerEmail' => 'jon.snow@thewall.com']);

        $orderFactory->createForCustomer('jon.snow@thewall.com')->willReturn($order);
        $formFactory->create(NewOrderType::class, $order)->willReturn($form);;

        $form->handleRequest($request)->willReturn($form);
        $form->getData()->willReturn($orderWithData);

        $orderProcessor->process($orderWithData)->shouldBeCalled();

        $this->prepareFromRequest($request)->shouldReturn($orderWithData);
    }

    function it_throws_exception_if_there_is_no_customer_email_specified_in_request(Request $request)
    {
        $request->attributes = new ParameterBag([]);

        $this
            ->shouldThrow(\InvalidArgumentException::class)
            ->during('prepareFromRequest', [$request])
        ;
    }
}
