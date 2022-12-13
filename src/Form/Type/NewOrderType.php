<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Bundle\AddressingBundle\Form\Type\AddressType;
use Sylius\Bundle\PromotionBundle\Form\Type\PromotionCouponToCodeType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

final class NewOrderType extends AbstractResourceType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
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
                'required' => false,
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
                'required' => false,
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event): void {
                /** @var OrderInterface $order */
                $order = $event->getData();

                /** @var ChannelInterface $channel */
                $channel = $order->getChannel();

                $event
                    ->getForm()
                    ->add('items', CollectionType::class, [
                        'label' => false,
                        'entry_type' => OrderItemType::class,
                        'entry_options' => [
                            'currency' => $order->getCurrencyCode(),
                        ],
                        'allow_add' => true,
                        'allow_delete' => true,
                        'by_reference' => false,
                    ])
                    ->add('adjustments', CollectionType::class, [
                        'label' => false,
                        'entry_type' => AdjustmentType::class,
                        'entry_options' => [
                            'label' => 'sylius_admin_order_creation.ui.order_discount',
                            'currency' => $order->getCurrencyCode(),
                            'type' => AdjustmentType::ORDER_DISCOUNT_ADJUSTMENT,
                        ],
                        'allow_add' => true,
                        'allow_delete' => true,
                        'by_reference' => false,
                        'button_add_label' => 'sylius_admin_order_creation.ui.add_discount',
                    ])
                    ->add('localeCode', LocaleCodeChoiceType::class, [
                        'label' => false,
                        'choices' => $channel->getLocales(),
                        'empty_data' => $order->getLocaleCode(),
                    ])
                    ->add('currencyCode', CurrencyCodeChoiceType::class, [
                        'label' => false,
                        'choices' => $channel->getCurrencies(),
                        'empty_data' => $order->getCurrencyCode(),
                    ])
                ;
            })
            ->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event): void {
                /** @var array $orderData */
                $orderData = $event->getData();

                if (isset($orderData['shippingAddress']) && $this->isBillingAddressEmpty($orderData)) {
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

    private function isBillingAddressEmpty(array $orderData): bool
    {
        if (!isset($orderData['billingAddress'])) {
            return true;
        }

        return
            $orderData['billingAddress']['firstName'] === '' &&
            $orderData['billingAddress']['lastName'] === '' &&
            $orderData['billingAddress']['street'] === '' &&
            $orderData['billingAddress']['countryCode'] === '' &&
            $orderData['billingAddress']['city'] === '' &&
            $orderData['billingAddress']['postcode'] === ''
        ;
    }
}
