@managing_orders
Feature: Creating order with online payment
    In order to place order in the name of a Customer and forward the payment to them
    As an Administrator
    I want to be able to create an order with online payment in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store has a product "Lannister Banner" priced at "$40"
        And the store ships everywhere for free
        And the store has a payment method "Paypal" with a code "PAYPAL" and Paypal Express Checkout gateway
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Creating an order with paypal payment for an existing customer
        When I create a new order for "jon.snow@the-wall.com"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Paypal" payment method
        And I place this order
        Then I should be notified that order has been successfully created
        And I should be able to copy payment link for a customer
        And there should be one not paid nor shipped order for "ned.stark@the-wall.com" in the registry
