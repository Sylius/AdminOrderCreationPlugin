<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\Sender;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Sender\OrderPaymentLinkSenderInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Mailer\Sender\SenderInterface;

final class OrderPaymentLinkSenderSpec extends ObjectBehavior
{
    function let(SenderInterface $sender)
    {
        $this->beConstructedWith($sender);
    }

    function it_implements_order_payment_link_sender_interface()
    {
        $this->shouldImplement(OrderPaymentLinkSenderInterface::class);
    }

    function it_sends_payment_link_for_order_to_the_customer(
        SenderInterface $sender,
        OrderInterface $order,
        CustomerInterface $customer,
        PaymentInterface $payment
    ) {
        $order->getLastPayment(PaymentInterface::STATE_NEW)->willReturn($payment);
        $order->getCustomer()->willReturn($customer);

        $payment->getDetails()->willReturn(['payment-link' => 'http://payment-link.com']);
        $customer->getEmail()->willReturn('john@example.com');

        $sender
            ->send(
                'order_created_in_admin_panel',
                ['john@example.com'],
                [
                    'order' => $order,
                    'paymentLink' => 'http://payment-link.com',
                ]
            )
            ->shouldBeCalled()
        ;

        $this->sendPaymentLink($order);
    }

    function it_does_nothing_if_there_is_no_new_payment_for_order(OrderInterface $order)
    {
        $order->getLastPayment(PaymentInterface::STATE_NEW)->willReturn(null);
        $order->getCustomer()->shouldNotBeCalled();

        $this->sendPaymentLink($order);
    }

    function it_does_nothing_if_payment_has_no_payment_link_set(OrderInterface $order, PaymentInterface $payment)
    {
        $order->getLastPayment(PaymentInterface::STATE_NEW)->willReturn($payment);
        $payment->getDetails()->willReturn([]);

        $order->getCustomer()->shouldNotBeCalled();

        $this->sendPaymentLink($order);
    }
}
