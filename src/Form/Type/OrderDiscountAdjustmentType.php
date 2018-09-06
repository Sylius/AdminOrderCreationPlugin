<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

final class OrderDiscountAdjustmentType extends AbstractType
{
    public const ORDER_DISCOUNT_ADJUSTMENT = 'order_discount';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event): void {
            $adjustment = $event->getData();

            if ($adjustment === null) {
                return;
            }

            $adjustment->setType(self::ORDER_DISCOUNT_ADJUSTMENT);
            $event->setData($adjustment);
        });
    }

    public function getParent(): string
    {
        return AdjustmentType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'sylius_order_discount_adjustment';
    }
}
