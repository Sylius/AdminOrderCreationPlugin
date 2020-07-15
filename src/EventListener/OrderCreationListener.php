<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\EventListener;

use SM\Factory\FactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\OrderCheckoutTransitions;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Webmozart\Assert\Assert;

final class OrderCreationListener
{
    /** @var OrderProcessorInterface */
    private $orderProcessor;

    /** @var FactoryInterface */
    private $stateMachineFactory;

    public function __construct(OrderProcessorInterface $orderProcessor, FactoryInterface $stateMachineFactory)
    {
        $this->orderProcessor = $orderProcessor;
        $this->stateMachineFactory = $stateMachineFactory;
    }

    public function processOrderBeforeCreation(GenericEvent $event): void
    {
        $order = $event->getSubject();
        Assert::isInstanceOf($order, OrderInterface::class);

        $order->recalculateAdjustmentsTotal();
        $this->orderProcessor->process($order);
    }

    public function completeOrderBeforeCreation(GenericEvent $event): void
    {
        $order = $event->getSubject();
        Assert::isInstanceOf($order, OrderInterface::class);

        $stateMachine = $this->stateMachineFactory->get($order, 'sylius_order_checkout');
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_ADDRESS);
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_SELECT_SHIPPING);
        if ($stateMachine->can(OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT)) {
            $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT);
        }
        $stateMachine->apply(OrderCheckoutTransitions::TRANSITION_COMPLETE);
    }
}
