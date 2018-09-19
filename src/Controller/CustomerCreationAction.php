<?php
declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Controller;


use Sylius\AdminOrderCreationPlugin\Provider\CustomerProviderInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;

final class CustomerCreationAction
{
    /** @var RouterInterface */
    private $router;

    /** @var CustomerProviderInterface */
    private $customerProvider;

    public function __construct(
        RouterInterface $router,
        CustomerProviderInterface $customerProvider
    ) {
        $this->router = $router;
        $this->customerProvider = $customerProvider;
    }

    public function __invoke(Request $request): Response
    {
        $customer = $this->customerProvider->provideNewCustomer($request->attributes->get('customerEmail'));

        return new RedirectResponse(
            $this->router->generate(
                'sylius_admin_order_creation_order_create', [
                'customerId'  => $customer->getId(),
                'channelCode' => $request->attributes->get('channelCode'),
            ]
            )
        );
    }
}
