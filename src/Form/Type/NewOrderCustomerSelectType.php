<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Bundle\ChannelBundle\Form\Type\ChannelChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

final class NewOrderCustomerSelectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('customer', CustomerAutocompleteChoiceType::class, [
                'multiple' => false,
                'required' => true,
            ])
            ->add('channel', ChannelChoiceType::class, [
                'label' => false,
                'required' => true,
            ])
        ;
    }

    public function getBlockPrefix()
    {
        return 'sylius_admin_order_creation_new_order_customer_select';
    }
}
