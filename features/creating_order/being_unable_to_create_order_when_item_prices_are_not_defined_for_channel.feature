@managing_orders
Feature: Being unable to create order when item prices are not defined for channel
    In order to have proper data provided for channel when creating an order
    As an Administrator
    I want to be unable to create an order when item prices are not defined for channel

    Background:
        Given the store operates on a channel named "Web-US" in "USD" currency
        And the store operates on a channel named "Web-GB" in "USD" currency
        And the store operates on a channel named "Web-FR" in "USD" currency
        And the store has a product "Stark Coat" priced at "$100" available in channel "Web-US" and channel "Web-GB"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Trying to create an order when item prices are not defined for channel
        When I create a new order for "jon.snow@the-wall.com" and channel "Web-FR"
        Then there should be no product available
