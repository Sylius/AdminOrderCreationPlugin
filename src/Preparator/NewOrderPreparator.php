<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Preparator;

use Sylius\AdminOrderCreationPlugin\Factory\OrderFactoryInterface;
use Sylius\AdminOrderCreationPlugin\Form\Type\NewOrderType;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Webmozart\Assert\Assert;

final class NewOrderPreparator implements OrderPreparatorInterface
{
    /** @var OrderFactoryInterface */
    private $orderFactory;

    /** @var FormFactoryInterface */
    private $formFactory;

    /** @var OrderProcessorInterface */
    private $orderProcessor;

    public function __construct(
        OrderFactoryInterface $orderFactory,
        FormFactoryInterface $formFactory,
        OrderProcessorInterface $orderProcessor
    ) {
        $this->orderFactory = $orderFactory;
        $this->formFactory = $formFactory;
        $this->orderProcessor = $orderProcessor;
    }

    public function prepareFromRequest(Request $request): OrderInterface
    {
        Assert::true($request->attributes->has('customerId'));
        /** @var string $customerEmail */
        $customerEmail = $request->attributes->get('customerId');

        Assert::true($request->attributes->has('channelCode'));
        /** @var string $channelCode */
        $channelCode = $request->attributes->get('channelCode');

        $order = $this->orderFactory->createForCustomerAndChannel($customerEmail, $channelCode);
        $form = $this->formFactory->create(NewOrderType::class, $order);

        /** @var OrderInterface $order */
        $order = $form->handleRequest($request)->getData();
        $this->orderProcessor->process($order);

        return $order;
    }
}
