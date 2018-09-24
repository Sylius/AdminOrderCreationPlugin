<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\Preparator;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderType;
use Sylius\AdminOrderCreationPlugin\Preparator\OrderPreparatorInterface;
use Sylius\Component\Core\Model\OrderInterface;
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
    ): void {
        $this->beConstructedWith($orderFactory, $formFactory, $orderProcessor);
    }

    function it_is_order_preparator(): void
    {
        $this->shouldImplement(OrderPreparatorInterface::class);
    }

    function it_prepares_new_order_based_on_request_data(
        OrderFactoryInterface $orderFactory,
        FormFactoryInterface $formFactory,
        OrderProcessorInterface $orderProcessor,
        Request $request,
        OrderInterface $order,
        OrderInterface $orderWithData,
        FormInterface $form
    ): void {
        $request->attributes = new ParameterBag([
            'customerId' => 'jon.snow@thewall.com',
            'channelCode' => 'WEB-US'
        ]);

        $orderFactory->createForCustomerAndChannel('jon.snow@thewall.com', 'WEB-US')->willReturn($order);
        $formFactory->create(NewOrderType::class, $order)->willReturn($form);

        $form->handleRequest($request)->willReturn($form);
        $form->getData()->willReturn($orderWithData);

        $orderProcessor->process($orderWithData)->shouldBeCalled();

        $this->prepareFromRequest($request)->shouldReturn($orderWithData);
    }

    function it_throws_exception_if_there_is_no_customer_email_specified_in_request(Request $request): void
    {
        $request->attributes = new ParameterBag([]);

        $this
            ->shouldThrow(\InvalidArgumentException::class)
            ->during('prepareFromRequest', [$request])
        ;
    }
}
