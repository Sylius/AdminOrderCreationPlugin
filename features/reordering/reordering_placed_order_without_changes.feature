@admin_order_creation_admin_reordering @ui
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

    Scenario: Reordering previously placed order with the same data
        When I reorder the order "#00000666"
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And this order shipping address should be "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States"
        And this order billing address should be "Ned Stark", "Elm Street", "444", "Rivendell", "United States"
        And this order shipping method should be "DHL"
        And this order payment method should be "Bank Transfer"
        And the product named "Stark Coat" should be in the items list
        And there should be 2 not paid nor shipped orders for "jon.snow@the-wall.com" in the registry
