<?php

namespace spec\Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Entity\OrderItemInterface;
use Sylius\AdminOrderCreationPlugin\ReorderProcessing\ReorderProcessor;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class ReorderItemsProcessorSpec extends ObjectBehavior
{
    function let(
        FactoryInterface $orderItemFactory,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier,
        OrderModifierInterface $orderModifier
    ): void {
        $this->beConstructedWith($orderItemFactory, $orderItemQuantityModifier, $orderModifier);
    }

    function it_implements_reorder_processor_interface(): void
    {
        $this->shouldImplement(ReorderProcessor::class);
    }

    function it_copies_items_from_existing_order_to_reorder_instance(
        FactoryInterface $orderItemFactory,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier,
        OrderModifierInterface $orderModifier,
        OrderInterface $order,
        OrderInterface $reorder,
        OrderItemInterface $firstOrderItem,
        OrderItemInterface $secondOrderItem,
        OrderItemInterface $firstNewOrderItem,
        OrderItemInterface $secondNewOrderItem,
        ProductVariantInterface $firstProductVariant,
        ProductVariantInterface $secondProductVariant
    ): void {
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

        $this->process($order, $reorder);
    }
}
