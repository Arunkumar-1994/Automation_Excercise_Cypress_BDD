Feature: Validating the register functionality.

Background: Common register user flow
Given lauch the application and validate the home page
When click on Signup Login button

Scenario:  Verify the user is able to register with all details.

And enter the name and email
And enter the all personal details
Then user should view the success message
And click on continue button
Then verify the user is logged in
When clcik on delete account button
Then the user should able to view the account deleted message

Scenario:  Verify the user should not able to register with existing email Id.

And enter the existing username and email
When click on signup button
Then user should view the error message Email Address already exist!

