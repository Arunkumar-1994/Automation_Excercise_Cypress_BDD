Feature: Validate the add to cart functionality

Background: launch the app

Given lauch the application and validate the home page

Scenario: verify the user is able to add the product to the cart.
When click the product option
Then user should view the product page
And addToCart the first product
And addToCart the second product
When click view cart button
Then user should view the addToCart page with product details

Scenario: verify the user is able to remove the product from the cart.
And addToCart the first product
And addToCart the second product
When click view cart button
Then user should view the addToCart page with product details
And click the remove button from the products