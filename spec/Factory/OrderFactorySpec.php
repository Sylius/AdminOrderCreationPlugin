<?php

namespace spec\Sylius\AdminOrderCreationPlugin\Factory;

use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Entity\OrderItemInterface;
use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Core\Model\ShippingMethodInterface;
use Sylius\Component\Core\Repository\CustomerRepositoryInterface;
use Sylius\Component\Currency\Model\CurrencyInterface;
use Sylius\Component\Locale\Model\LocaleInterface;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Payment\Factory\PaymentFactoryInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class OrderFactorySpec extends ObjectBehavior
{
    function let(
        FactoryInterface $decoratedFactory,
        FactoryInterface $customerFactory,
        FactoryInterface $orderItemFactory,
        FactoryInterface $shipmentFactory,
        PaymentFactoryInterface $paymentFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        RepositoryInterface $currencyRepository,
        RepositoryInterface $localeRepository,
        OrderModifierInterface $orderModifier,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier
    ) {
        $this->beConstructedWith(
            $decoratedFactory,
            $customerFactory,
            $orderItemFactory,
            $shipmentFactory,
            $paymentFactory,
            $customerRepository,
            $channelRepository,
            $currencyRepository,
            $localeRepository,
            $orderModifier,
            $orderItemQuantityModifier
        );
    }

    function it_implements_order_factory_interface(): void
    {
        $this->shouldImplement(OrderFactoryInterface::class);
    }

    function it_delegates_creating_new_order(FactoryInterface $decoratedFactory, OrderInterface $order): void
    {
        $decoratedFactory->createNew()->willReturn($order);

        $this->createNew()->shouldReturn($order);
    }

    function it_creates_order_for_customer_with_default_channel_locale_and_currency(
        FactoryInterface $decoratedFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        RepositoryInterface $currencyRepository,
        RepositoryInterface $localeRepository,
        OrderInterface $order,
        CustomerInterface $customer,
        ChannelInterface $channel,
        CurrencyInterface $currency,
        LocaleInterface $locale
    ): void {
        $decoratedFactory->createNew()->willReturn($order);
        $customerRepository->findOneBy(['email' => 'customer@example.com'])->willReturn($customer);
        $channelRepository->findOneBy(['enabled' => true])->willReturn($channel);

        $currencyRepository->findOneBy([])->willReturn($currency);
        $currency->getCode()->willReturn('USD');

        $localeRepository->findOneBy([])->willReturn($locale);
        $locale->getCode()->willReturn('en_US');

        $order->setCustomer($customer)->shouldBeCalled();
        $order->setChannel($channel)->shouldBeCalled();
        $order->setCurrencyCode('USD')->shouldBeCalled();
        $order->setLocaleCode('en_US')->shouldBeCalled();

        $this->createForCustomer('customer@example.com')->shouldReturn($order);
    }

    function it_creates_order_for_new_customer_with_default_channel_locale_and_currency(
        FactoryInterface $decoratedFactory,
        FactoryInterface $customerFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        RepositoryInterface $currencyRepository,
        RepositoryInterface $localeRepository,
        OrderInterface $order,
        CustomerInterface $customer,
        ChannelInterface $channel,
        CurrencyInterface $currency,
        LocaleInterface $locale
    ): void {
        $decoratedFactory->createNew()->willReturn($order);
        $customerRepository->findOneBy(['email' => 'customer@example.com'])->willReturn(null);

        $customerFactory->createNew()->willReturn($customer);
        $customer->setEmail('customer@example.com')->shouldBeCalled();

        $channelRepository->findOneBy(['enabled' => true])->willReturn($channel);

        $currencyRepository->findOneBy([])->willReturn($currency);
        $currency->getCode()->willReturn('USD');

        $localeRepository->findOneBy([])->willReturn($locale);
        $locale->getCode()->willReturn('en_US');

        $order->setCustomer($customer)->shouldBeCalled();
        $order->setChannel($channel)->shouldBeCalled();
        $order->setCurrencyCode('USD')->shouldBeCalled();
        $order->setLocaleCode('en_US')->shouldBeCalled();

        $this->createForCustomer('customer@example.com')->shouldReturn($order);
    }

    function it_creates_order_from_an_existing_order(
        FactoryInterface $decoratedFactory,
        FactoryInterface $orderItemFactory,
        FactoryInterface $shipmentFactory,
        PaymentFactoryInterface $paymentFactory,
        OrderModifierInterface $orderModifier,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier,
        OrderInterface $order,
        OrderInterface $reorder,
        ChannelInterface $channel,
        CustomerInterface $customer,
        ShipmentInterface $shipment,
        ShipmentInterface $newShipment,
        ShippingMethodInterface $shippingMethod,
        PaymentInterface $payment,
        PaymentInterface $newPayment,
        PaymentMethodInterface $paymentMethod,
        OrderItemInterface $firstOrderItem,
        OrderItemInterface $secondOrderItem,
        OrderItemInterface $firstNewOrderItem,
        OrderItemInterface $secondNewOrderItem,
        ProductVariantInterface $firstProductVariant,
        ProductVariantInterface $secondProductVariant,
        AddressInterface $shippingAddress,
        AddressInterface $billingAddress
    ): void {
        $decoratedFactory->createNew()->willReturn($reorder);
        $order->getChannel()->willReturn($channel);
        $order->getCustomer()->willReturn($customer);
        $order->getCurrencyCode()->willReturn('USD');
        $order->getLocaleCode()->willReturn('en_US');
        $order->getNotes()->willReturn('test_notes');
        $order->getShippingAddress()->willReturn($shippingAddress);
        $order->getBillingAddress()->willReturn($billingAddress);

        $reorder->setChannel($channel)->shouldBeCalled();
        $reorder->setCustomer($customer)->shouldBeCalled();
        $reorder->setCurrencyCode('USD')->shouldBeCalled();
        $reorder->setLocaleCode('en_US')->shouldBeCalled();
        $reorder->setNotes('test_notes')->shouldBeCalled();
        $reorder->setBillingAddress($billingAddress)->shouldBeCalled();
        $reorder->setShippingAddress($shippingAddress)->shouldBeCalled();

        $order->hasShipments()->willReturn(true);
        $order->getShipments()->willReturn(new ArrayCollection([$shipment->getWrappedObject()]));

        $shipment->getState()->willReturn(ShipmentInterface::STATE_SHIPPED);
        $shipment->getMethod()->willReturn($shippingMethod);

        $shipmentFactory->createNew()->willReturn($newShipment);
        $newShipment->setOrder($reorder)->shouldBeCalled();
        $newShipment->setMethod($shippingMethod)->shouldBeCalled();

        $reorder->addShipment($newShipment)->shouldBeCalled();

        $order->hasPayments()->willReturn(true);
        $order->getPayments()->willReturn(new ArrayCollection([$payment->getWrappedObject()]));

        $payment->getState()->willReturn(PaymentInterface::STATE_COMPLETED);
        $payment->getMethod()->willReturn($paymentMethod);

        $paymentFactory->createNew()->willReturn($newPayment);
        $newPayment->setOrder($reorder)->shouldBeCalled();
        $newPayment->setMethod($paymentMethod)->shouldBeCalled();

        $reorder->addPayment($newPayment)->shouldBeCalled();

        $order->getItems()->willReturn(new ArrayCollection([
            $firstOrderItem->getWrappedObject(),
            $secondOrderItem->getWrappedObject()
        ]));

        $firstOrderItem->getUnitPrice()->willReturn(10);
        $firstOrderItem->getVariant()->willReturn($firstProductVariant);
        $firstOrderItem->getQuantity()->willReturn(1);
        $firstOrderItem->getProductName()->willReturn('test_product_name_01');
        $firstOrderItem->getVariantName()->willReturn('test_variant_name_01');

        $secondOrderItem->getUnitPrice()->willReturn(20);
        $secondOrderItem->getVariant()->willReturn($secondProductVariant);
        $secondOrderItem->getQuantity()->willReturn(2);
        $secondOrderItem->getProductName()->willReturn('test_product_name_02');
        $secondOrderItem->getVariantName()->willReturn('test_variant_name_02');

        $orderItemFactory->createNew()->willReturn($firstNewOrderItem, $secondNewOrderItem);

        $firstProductVariant->isTracked()->willReturn(true);
        $firstProductVariant->isInStock()->willReturn(true);

        $secondProductVariant->isTracked()->willReturn(true);
        $secondProductVariant->isInStock()->willReturn(true);

        $firstNewOrderItem->setVariant($firstProductVariant)->shouldBeCalled();
        $firstNewOrderItem->setUnitPrice(10)->shouldBeCalled();
        $firstNewOrderItem->setProductName('test_product_name_01')->shouldBeCalled();
        $firstNewOrderItem->setVariantName('test_variant_name_01')->shouldBeCalled();

        $secondNewOrderItem->setVariant($secondProductVariant)->shouldBeCalled();
        $secondNewOrderItem->setUnitPrice(20)->shouldBeCalled();
        $secondNewOrderItem->setProductName('test_product_name_02')->shouldBeCalled();
        $secondNewOrderItem->setVariantName('test_variant_name_02')->shouldBeCalled();

        $orderItemQuantityModifier->modify($firstNewOrderItem, 1)->shouldBeCalled();
        $orderItemQuantityModifier->modify($secondNewOrderItem, 2)->shouldBeCalled();

        $orderModifier->addToOrder($reorder, $firstNewOrderItem)->shouldBeCalled();
        $orderModifier->addToOrder($reorder, $secondNewOrderItem)->shouldBeCalled();

        $this->createFromExistingOrder($order);
    }
}
