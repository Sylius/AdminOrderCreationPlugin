@admin_order_creation_managing_orders
Feature: Creating order with different billing address
    In order to place an order in the name of a Customer
    As an Administrator
    I want to be able to create an order with different shipping and billing addresses in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store has a product "Lannister Banner" priced at "$40"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And their default address is "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And this customer has an address "Ned Stark", "Banana Street", "90232", "New York", "United States" in their address book
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Creating an order with both addresses from address books
        When I create a new order for "jon.snow@the-wall.com" and channel "United States"
        And I add "Stark Coat" to this order
        And I see the address book shipping address select
        And I see the address book billing address select
        And I select first address in shipping address book with name "Jon Snow"
        And I select first address in billing address book with name "Ned Stark"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And this order shipping address should be "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States"
        And this order billing address should be "Ned Stark", "Banana Street", "90232", "New York", "United States"
        And there should be one not paid nor shipped order with channel "United States" for "jon.snow@the-wall.com" in the registry

    @ui @javascript
    Scenario: Creating an order with one address from address books
        When I create a new order for "jon.snow@the-wall.com" and channel "United States"
        And I add "Stark Coat" to this order
        And I see the address book shipping address select
        And I see the address book billing address select
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select first address in billing address book with name "Ned Stark"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And this order billing address should be "Ned Stark", "Banana Street", "90232", "New York", "United States"
        And this order shipping address should be "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States"
        And there should be one not paid nor shipped order with channel "United States" for "jon.snow@the-wall.com" in the registry
