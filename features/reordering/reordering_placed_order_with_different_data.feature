@reordering @ui
Feature: Reordering previously placed order with different data
    In order to reorder an order placed by Customer in the name of this Customer
    As an Administrator
    I want to be able to reorder a previously placed order with different data in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store ships everywhere for free
        And the store has "DHL" shipping method with "$10.00" fee
        And the store allows paying with "Cash on Delivery"
        And the store has a payment method "Paypal" with a code "PAYPAL" and Paypal Express Checkout gateway
        And there is a customer account "jon.snow@the-wall.com"
        And a customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought a single "Stark Coat"
        And the customer "Jon Snow" addressed it to "Frost Alley", "90210" "Ankh-Morpork" in the "United States"
        And for the billing address of "Ned Stark" in the "Elm Street", "444" "Rivendell", "United States"
        And the customer chose "Free" shipping method with "Cash on Delivery" payment
        And I am logged in as an administrator

    @javascript
    Scenario: Reordering previously placed order with different addresses
        When I reorder the order "#00000666"
        And I specify this order shipping address as "Los Angeles", "Frost Alley", "90210", "United States" for "Lucifer Morningstar"
        And I specify this order billing address as "Los Angeles", "Pacific Coast Hwy", "90806", "United States" for "Mazikeen Lilim"
        And I place this order
        Then I should be notified that order has been successfully created
        And this order shipping address should be "Lucifer Morningstar", "Frost Alley", "90210", "Los Angeles", "United States"
        And this order billing address should be "Mazikeen Lilim", "Pacific Coast Hwy", "90806", "Los Angeles", "United States"
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry

    @javascript
    Scenario: Reordering previously placed order with different shipping method
        When I reorder the order "#00000666"
        And I select "DHL" shipping method
        And I place this order
        Then I should be notified that order has been successfully created
        And this order shipping method should be "DHL"
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry

    @javascript @email
    Scenario: Reordering previously placed order with different payment method
        When I reorder the order "#00000666"
        And I select "Paypal" payment method
        And I place this order
        Then I should be notified that order has been successfully created
        And this order payment method should be "Paypal"
        And there should be a payment link displayed next to order's payment
        And there should be a payment link sent to "jon.snow@the-wall.com"
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry
