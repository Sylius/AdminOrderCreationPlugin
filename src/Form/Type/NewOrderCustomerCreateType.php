<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Bundle\ChannelBundle\Form\Type\ChannelChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

final class NewOrderCustomerCreateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('customer', TextType::class, [
                'label' => false,
            ])
            ->add('channel', ChannelChoiceType::class, [
                'label' => false,
            ])
        ;
    }

    public function getBlockPrefix()
    {
        return 'sylius_admin_order_creation_new_order_customer_create';
    }
}
