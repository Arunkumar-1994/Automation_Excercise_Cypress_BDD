Feature: Validate the products functionlity

Background: View the product page.

Given lauch the application and validate the home page
When click the product option
Then user should view the product page

Scenario: Verify all products and product detail page

And click on view product of first product
Then user should view the product details product name, category, price, availability, condition, brand

Scenario: verify the user is able to increase the quantity of the product

And click on view product of first product
Then user should view the product details product name, category, price, availability, condition, brand
And increase the quantity of the product.
And click addToCart button
When click the View cart button
Then user should view the updated addToCart page with product details

Scenario: verify the user is able to view the brand products

And verify the brand visible on left sidebar