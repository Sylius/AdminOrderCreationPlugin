<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Form\Type;

use Sylius\Bundle\MoneyBundle\Form\Type\MoneyType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Sylius\Bundle\ResourceBundle\Form\Type\ResourceAutocompleteChoiceType;
use Sylius\Component\Core\Model\ProductVariant;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class OrderItemType extends AbstractResourceType
{
    /** @var DataMapperInterface */
    private $dataMapper;

    public function __construct(
        string $dataClass,
        array $validationGroups = [],
        DataMapperInterface $dataMapper
    ) {
        parent::__construct($dataClass, $validationGroups);

        $this->dataMapper = $dataMapper;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('quantity', IntegerType::class, [
                'attr' => ['min' => 1],
                'label' => 'sylius.ui.quantity',
                'data' => 1,
            ])
            ->add('variant', ResourceAutocompleteChoiceType::class, [
                'label' => 'sylius.ui.variant',
                'choice_name' => 'descriptor',
                'choice_value' => 'code',
                'resource' => 'sylius.product_variant',
            ])
            ->add('customUnitPrice', MoneyType::class, [
                'label' => 'sylius.ui.unit_price',
                //temporary solution
                'currency' => 'USD',
            ])
            ->setDataMapper($this->dataMapper)
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'sylius_admin_order_creation_new_order_order_item';
    }
}
