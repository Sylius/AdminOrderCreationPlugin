@admin_order_creation_managing_orders @ui @javascript
Feature: Creating simple order
    In order to place an order in the name of a Customer
    As an Administrator
    I want to be able to create a simple order in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store has a product "Lannister Banner" priced at "$40"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    Scenario: Creating a simple order for an existing customer
        When I create a new order for "jon.snow@the-wall.com" and channel "United States"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And there should be one not paid nor shipped order with channel code 'WEB-US' for "jon.snow@the-wall.com" in the registry

    Scenario: Creating a simple order for a new customer
        When I create a new order for a new customer with email "ned.stark@the-wall.com" and channel "United States"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And there should be one not paid nor shipped order with channel code 'WEB-US' for "ned.stark@the-wall.com" in the registry

    Scenario: Trying to create an order for an existing customer without selecting them
        When I try to create a new order for an existing customer without selecting them
        Then I should be notified that customer email cannot be empty

    @application
    Scenario: Trying to create an order for a new customer without email
        When I try to create a new order for a new customer without email
        Then I should be notified that customer email cannot be empty

    Scenario: Being unable to add multiple payment methods
        When I create a new order for "jon.snow@the-wall.com" and channel "United States"
        And I select "Cash on Delivery" payment method
        Then adding another payment method should not be possible
