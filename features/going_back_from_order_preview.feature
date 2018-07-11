@managing_orders @ui @javascript
Feature: Going back from the order preview
    In order to apply changes after previewing the order
    As an Administrator
    I want to be able to apply changes after previewing the order

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    Scenario: Having filled data after going back from the order preview
        When I create a new order for "jon.snow@the-wall.com"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place this order
        And I go back to the order creation
        And the "Stark Coat" product should be added
        And the address "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States" should be specified as shipping address
        And the "Free" shipping method should be selected
        And the "Cash on Delivery" payment method should be selected
