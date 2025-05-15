Feature: validating the contact us form functionality.

Scenario: Verify the user is able to send the feedback to the team.

Given lauch the application and validate the home page 
And click on contact us option
And user should veiw the contact us page with respective details and enter details
When click on submit button
Then user should view the succes message and home button. 