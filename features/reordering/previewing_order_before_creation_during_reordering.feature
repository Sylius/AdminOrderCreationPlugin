@admin_reordering @ui @javascript
Feature: Previewing order before creation during reordering
    In order to be sure about details of the order I am placing
    As an Administrator
    I want to see order preview before placing it

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And a customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought 2 "Stark Coat" products
        And the customer "Jon Snow" addressed it to "Frost Alley", "90210" "Ankh-Morpork" in the "United States"
        And for the billing address of "Ned Stark" in the "Elm Street", "444" "Rivendell", "United States"
        And the customer chose "Free" shipping method with "Cash on Delivery" payment
        And I am logged in as an administrator

    Scenario: Seeing order preview during reordering
        When I reorder the order "#00000666"
        And I place this order
        Then I should see preview of the order with total "$200.00"
        And this order should contain "Stark Coat" product
        And its shipping total should be "$0.00"
        And it should have one "Cash on Delivery" payment
        And I should be able to confirm order creation
