Feature: validate the subscrition functionality in home and cart page.

Background: Background name
Given lauch the application and validate the home page

Scenario: verify the user is able to subscripe in the home page

And scroll down to the footer section
And enter the email
When click subscripe button
Then user is able to view the success message.

Scenario: verify the user is able to subscripe in the cart page

When click on cart option
Then user is able to view the cart page
And scroll down to the footer section
And enter the email
When click subscripe button
Then user is able to view the success message.
