<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Component\Core\Model\Customer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

final class NewOrderCustomerCreateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('customer', TextType::class, [
            'label' => 'sylius.ui.customer',
        ]);
    }

    public function getBlockPrefix()
    {
        return 'sylius_admin_order_creation_new_order_customer_create';
    }
}
