Feature: Validating the register functionality.

Scenario:  Verify the user is able to register with all details.

Given lauch the application and validate the home page
When click on Signup Login button
And enter the name and email
And enter the all personal details
Then user should view the success message
And click on continue button
Then verify the user is logged in
When clcik on delete account button
Then the user should able to view the account deleted message