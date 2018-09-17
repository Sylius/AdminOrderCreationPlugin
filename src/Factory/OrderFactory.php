<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Factory;

use Sylius\AdminOrderCreationPlugin\ReorderProcessing\ReorderProcessor;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Repository\CustomerRepositoryInterface;
use Sylius\Component\Currency\Model\CurrencyInterface;
use Sylius\Component\Locale\Model\LocaleInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class OrderFactory implements OrderFactoryInterface
{
    /** @var FactoryInterface */
    private $baseOrderFactory;

    /** @var FactoryInterface */
    private $customerFactory;

    /** @var CustomerRepositoryInterface */
    private $customerRepository;

    /** @var ChannelRepositoryInterface */
    private $channelRepository;

    /** @var ReorderProcessor */
    private $reorderProcessor;

    public function __construct(
        FactoryInterface $baseOrderFactory,
        FactoryInterface $customerFactory,
        CustomerRepositoryInterface $customerRepository,
        ChannelRepositoryInterface $channelRepository,
        ReorderProcessor $reorderProcessor
    ) {
        $this->baseOrderFactory = $baseOrderFactory;
        $this->customerFactory = $customerFactory;
        $this->customerRepository = $customerRepository;
        $this->channelRepository = $channelRepository;

        $this->reorderProcessor = $reorderProcessor;
    }

    public function createNew(): OrderInterface
    {
        $order = $this->baseOrderFactory->createNew();
        assert($order instanceof OrderInterface);

        return $order;
    }

    public function createForCustomerAndChannel(string $customerEmail, string $channelCode): OrderInterface
    {
        $customer = $this->getCustomerForOrder($customerEmail);

        $order = $this->baseOrderFactory->createNew();
        assert($order instanceof OrderInterface);

        /** @var ChannelInterface|null $channel */
        $channel = $this->channelRepository->findOneByCode($channelCode);
        assert($channel instanceof ChannelInterface);

        $order->setCustomer($customer);
        $order->setChannel($channel);

        /** @var CurrencyInterface|null $currency */
        $currency = $channel->getBaseCurrency();
        assert($currency instanceof CurrencyInterface);
        $order->setCurrencyCode($currency->getCode());

        /** @var LocaleInterface|null $defaultLocale */
        $defaultLocale = $channel->getDefaultLocale();
        assert($defaultLocale instanceof LocaleInterface);
        $order->setLocaleCode($defaultLocale->getCode());

        return $order;
    }

    public function createFromExistingOrder(OrderInterface $order): OrderInterface
    {
        $reorder = $this->createNew();
        assert($reorder instanceof OrderInterface);

        $this->reorderProcessor->process($order, $reorder);

        return $reorder;
    }

    private function getCustomerForOrder(string $email): CustomerInterface
    {
        $customer = $this->customerRepository->findOneBy(['email' => $email]);

        if (null === $customer) {
            $customer = $this->customerFactory->createNew();
            assert($customer instanceof CustomerInterface);

            $customer->setEmail($email);
        }

        assert($customer instanceof CustomerInterface);

        return $customer;
    }
}
