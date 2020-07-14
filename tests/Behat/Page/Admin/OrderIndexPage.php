<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Behat\Mink\Session;
use Sylius\Behat\Page\Admin\Order\IndexPage;
use Sylius\Behat\Service\Accessor\TableAccessorInterface;
use Symfony\Component\Routing\RouterInterface;

final class OrderIndexPage extends IndexPage implements OrderIndexPageInterface
{
    /** @var TableAccessorInterface */
    private $tableAccessor;

    public function __construct(
        Session $session,
        $parameters,
        RouterInterface $router,
        TableAccessorInterface $tableAccessor,
        $routeName
    ) {
        parent::__construct($session, $parameters, $router, $tableAccessor, $routeName);

        $this->tableAccessor = $tableAccessor;
    }

    public function createOrder(): void
    {
        $this->getDocument()->clickLink('Create');
    }

    public function countOrders(array $parameters): int
    {
        try {
            $rows = $this->tableAccessor->getRowsWithFields($this->getElement('table'), $parameters);

            return count($rows);
        } catch (\Exception $exception) {
            return 0;
        }
    }
}
