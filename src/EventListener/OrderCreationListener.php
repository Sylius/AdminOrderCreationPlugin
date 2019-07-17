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
        $transitions = [
            OrderCheckoutTransitions::TRANSITION_ADDRESS,
            OrderCheckoutTransitions::TRANSITION_SELECT_SHIPPING,
            OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT,
            OrderCheckoutTransitions::TRANSITION_COMPLETE,
        ];
    
        foreach ($transitions as $transition) {
            if ($stateMachine->can($transition)) {
                $stateMachine->apply($transition);
            }
        }
    }
}
