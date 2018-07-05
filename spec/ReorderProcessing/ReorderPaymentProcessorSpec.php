<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\ReorderProcessing\ReorderProcessor;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Payment\Factory\PaymentFactoryInterface;

final class ReorderPaymentProcessorSpec extends ObjectBehavior
{
    function let(PaymentFactoryInterface $paymentFactory): void
    {
        $this->beConstructedWith($paymentFactory);
    }

    function it_implements_reorder_processor_interface(): void
    {
        $this->shouldImplement(ReorderProcessor::class);
    }

    function it_copies_payment_from_existing_order_to_reorder_instance(
        PaymentFactoryInterface $paymentFactory,
        OrderInterface $order,
        OrderInterface $reorder,
        PaymentInterface $payment,
        PaymentInterface $newPayment,
        PaymentMethodInterface $paymentMethod
    ): void {
        $order->hasPayments()->willReturn(true);
        $order->getPayments()->willReturn(new ArrayCollection([$payment->getWrappedObject()]));

        $payment->getState()->willReturn(PaymentInterface::STATE_COMPLETED);
        $payment->getMethod()->willReturn($paymentMethod);

        $paymentFactory->createNew()->willReturn($newPayment);
        $newPayment->setOrder($reorder)->shouldBeCalled();
        $newPayment->setMethod($paymentMethod)->shouldBeCalled();

        $reorder->addPayment($newPayment)->shouldBeCalled();

        $this->process($order, $reorder);
    }
}
