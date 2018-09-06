<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

final class OrderItemDiscountAdjustmentType extends AbstractType
{
    public const ORDER_ITEM_DISCOUNT_ADJUSTMENT = 'order_item_discount';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event): void {
            $adjustment = $event->getData();

            if ($adjustment === null) {
                return;
            }

            $adjustment->setType(self::ORDER_ITEM_DISCOUNT_ADJUSTMENT);
            $event->setData($adjustment);
        });
    }

    public function getParent(): string
    {
        return AdjustmentType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'sylius_order_item_discount_adjustment';
    }
}
