@admin_reordering @ui @javascript
Feature: Placing order after going back from the order preview during reordering
    In order to apply changes after previewing the order
    As an Administrator
    I want to be able to apply changes after previewing the order

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And a customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought a single "Stark Coat"
        And the customer "Jon Snow" addressed it to "Frost Alley", "90210" "Ankh-Morpork" in the "United States"
        And for the billing address of "Ned Stark" in the "Elm Street", "444" "Rivendell", "United States"
        And the customer chose "Free" shipping method with "Cash on Delivery" payment
        And I am logged in as an administrator

    Scenario: Placing order after going back from the order preview during reordering
        When I reorder the order "#00000666"
        And I place this order
        And I go back to the order creation
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And this order shipping address should be "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States"
        And this order billing address should be "Ned Stark", "Elm Street", "444", "Rivendell", "United States"
        And this order shipping method should be "Free"
        And this order payment method should be "Cash on Delivery"
        And the product named "Stark Coat" should be in the items list
