@admin_reordering @ui
Feature: Reordering previously placed order
    In order to reorder the same order as a Customer placed before in the name of this Customer
    As an Administrator
    I want to be able to reorder a previously placed order in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store ships everywhere for free
        And the store allows shipping with "DHL"
        And the store allows paying with "Cash on Delivery"
        And the store allows paying with "Bank Transfer"
        And the store has a payment method "Paypal" with a code "PAYPAL" and Paypal Express Checkout gateway
        And there is a customer account "jon.snow@the-wall.com"
        And a customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought 2 "Stark Coat" products
        And the customer "Jon Snow" addressed it to "Frost Alley", "90210" "Ankh-Morpork" in the "United States"
        And for the billing address of "Ned Stark" in the "Elm Street", "444" "Rivendell", "United States"
        And the customer chose "DHL" shipping method with "Bank Transfer" payment
        And I am logged in as an administrator

    Scenario: Having billing address section filled with address information taken from previously placed order
        When I reorder the order "#00000666"
        Then the address "Ned Stark", "Elm Street", "444", "Rivendell", "United States" should be filled as billing address

    Scenario: Having shipping address section filled with address information taken from previously placed order
        When I reorder the order "#00000666"
        Then the address "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States" should be specified as shipping address

    @javascript
    Scenario: Having shipping method taken from previously placed order
        When I reorder the order "#00000666"
        Then the "DHL" shipping method should be selected

    @javascript
    Scenario: Having payment method taken from previously placed order
        When I reorder the order "#00000666"
        Then the "Bank Transfer" payment method should be selected

    @javascript
    Scenario: Having products taken from previously placed order
        When I reorder the order "#00000666"
        Then 2 "Stark Coat" products should be added

    Scenario: Reordering previously placed order with the same addresses
        When I reorder the order "#00000666"
        And I place this order
        Then I should be notified that order has been successfully created
        And this order shipping address should be "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States"
        And this order billing address should be "Ned Stark", "Elm Street", "444", "Rivendell", "United States"
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry

    Scenario: Reordering previously placed order with the same shipping method
        When I reorder the order "#00000666"
        And I place this order
        Then I should be notified that order has been successfully created
        And this order shipping method should be "DHL"
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry

    Scenario: Reordering previously placed order with the same payment method
        When I reorder the order "#00000666"
        And I place this order
        Then I should be notified that order has been successfully created
        And this order payment method should be "Bank Transfer"
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry

    Scenario: Reordering previously placed order with the same products
        When I reorder the order "#00000666"
        And I place this order
        Then I should be notified that order has been successfully created
        And this order payment method should be "Bank Transfer"
        And the product named "Stark Coat" should be in the items list
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry
