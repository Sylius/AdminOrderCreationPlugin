<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\EventListener;

use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\OrderCheckoutTransitions;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Sylius\Component\Resource\StateMachine\StateMachineInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

final class OrderCreationListenerSpec extends ObjectBehavior
{
    function let(
        OrderProcessorInterface $orderProcessor,
        FactoryInterface $stateMachineFactory
    ) {
        $this->beConstructedWith($orderProcessor, $stateMachineFactory);
    }

    function it_processes_order_before_creation(
        OrderProcessorInterface $orderProcessor,
        GenericEvent $event,
        OrderInterface $order
    ) {
        $event->getSubject()->willReturn($order);

        $order->recalculateAdjustmentsTotal()->shouldBeCalled();
        $orderProcessor->process($order)->shouldBeCalled();

        $this->processOrderBeforeCreation($event);
    }

    function it_completes_order_before_creation(
        FactoryInterface $stateMachineFactory,
        GenericEvent $event,
        StateMachineInterface $stateMachine,
        OrderInterface $order
    ) {
        $event->getSubject()->willReturn($order);

        $stateMachineFactory->get($order, 'sylius_order_checkout')->willReturn($stateMachine);
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_ADDRESS)->shouldBeCalled();
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_SELECT_SHIPPING)->shouldBeCalled();
        $stateMachine->can(OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT)->willReturn(true);
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT)->shouldBeCalled();
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_COMPLETE)->shouldBeCalled();

        $this->completeOrderBeforeCreation($event);
    }

    function it_completes_order_without_payment_before_creation(
        FactoryInterface $stateMachineFactory,
        GenericEvent $event,
        StateMachineInterface $stateMachine,
        OrderInterface $order
    ) {
        $event->getSubject()->willReturn($order);

        $stateMachineFactory->get($order, 'sylius_order_checkout')->willReturn($stateMachine);
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_ADDRESS)->shouldBeCalled();
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_SELECT_SHIPPING)->shouldBeCalled();
        $stateMachine->can(OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT)->willReturn(false);
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT)->shouldNotBeCalled();
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_COMPLETE)->shouldBeCalled();

        $this->completeOrderBeforeCreation($event);
    }

    function it_throws_exception_if_event_subject_is_not_order(GenericEvent $event)
    {
        $event->getSubject()->willReturn('badObject', 'badObject');

        $this
            ->shouldThrow(\InvalidArgumentException::class)
            ->during('processOrderBeforeCreation', [$event])
        ;

        $this
            ->shouldThrow(\InvalidArgumentException::class)
            ->during('completeOrderBeforeCreation', [$event])
        ;
    }
}
