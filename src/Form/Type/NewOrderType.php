<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Bundle\AddressingBundle\Form\Type\AddressType;
use Sylius\Bundle\MoneyBundle\Form\Type\MoneyType;
use Sylius\Bundle\PromotionBundle\Form\Type\PromotionCouponToCodeType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

final class NewOrderType extends AbstractResourceType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('items', CollectionType::class, [
                'label' => 'sylius.ui.items',
                'entry_type' => OrderItemType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            ->add('promotionCoupon', PromotionCouponToCodeType::class, [
                'by_reference' => false,
                'label' => 'sylius.form.cart.coupon',
                'required' => false,
            ])
            ->add('shippingAddress', AddressType::class, [
                'label' => 'sylius.ui.shipping_address',
            ])
            ->add('billingAddress', AddressType::class, [
                'label' => 'sylius.ui.billing_address',
            ])
            ->add('payments', CollectionType::class, [
                'entry_type' => PaymentType::class,
                'label' => 'sylius.ui.payments',
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            ->add('shipments', CollectionType::class, [
                'entry_type' => ShipmentType::class,
                'label' => 'sylius.ui.shipments',
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event): void {
                $event
                    ->getForm()
                    ->add('customTotal', MoneyType::class, [
                        'label' => 'sylius_admin_order_creation.form.order.order_price',
                        'mapped' => false,
                        'currency' => $event->getData()->getCurrencyCode(),
                    ])
                ;
            })
            ->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event): void {
                $orderData = $event->getData();

                if (isset($orderData['shippingAddress']) && !isset($orderData['billingAddress'])) {
                    $orderData['billingAddress'] = $orderData['shippingAddress'];

                    $event->setData($orderData);
                }
            })
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'sylius_admin_order_creation_new_order';
    }
}
