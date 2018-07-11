<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Bundle\MoneyBundle\Form\Type\MoneyType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Sylius\Component\Core\Model\AdjustmentInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints\Range;

final class AdjustmentType extends AbstractResourceType
{
    public const ORDER_DISCOUNT_ADJUSTMENT = 'order_discount';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('amount', MoneyType::class, [
            'label' => 'sylius_admin_order_creation.ui.order_discount',
            'currency' => 'USD',
            'constraints' => [
                new Range(['min' => 0, 'minMessage' => 'sylius_admin_order_creation.order_discount', 'groups' => ['sylius']]),
            ]
        ]);

        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event): void {
            /** @var AdjustmentInterface $adjustment */
            $adjustment = $event->getData();

            if ($adjustment === null) {
                return;
            }

            $adjustment->setType(self::ORDER_DISCOUNT_ADJUSTMENT);
            $adjustment->setLabel('sylius_admin_order_creation.ui.order_discount');
            $adjustment->setAmount(-1 * $adjustment->getAmount());

            $event->setData($adjustment);
        });
    }

    public function getBlockPrefix(): string
    {
        return 'sylius_admin_order_creation_new_order_adjustment';
    }
}
