Feature: Validate the add to cart functionality

Background: Background name

Given lauch the application and validate the home page
When click the product option
Then user should view the product page

Scenario: verify the user is able to add the product to the cart.

And addToCart the first product
And addToCart the second product
When click view cart button
Then user should view the addToCart page with product details

# Scenario: verify the user is able to increase the quantity of the product

# When click on view cart button in the product page
# Then user should view the product details
# And increase the quantity of the product
# And click addToCart button
# When click view cart button
# Then user should view the addToCart page with product details