import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";


const homePage = new HomePage();

let data = {};
beforeEach(() => {
  cy.fixture("example").then(function (jsonData) {
    data = jsonData;
  });
});

Given("lauch the application and validate the home page", () => {
  cy.visit("https://www.automationexercise.com/");
  cy.title().should("eq", "Automation Exercise");
  cy.waitUntil(() => homePage.getLogoVisible().should("be.visible"));
  cy.waitUntil(() =>
    homePage
      .getActiveSentence()
      .should(
        "have.text",
        "Full-Fledged practice website for Automation Engineers"
      )
  );
});

And("scroll down to the footer section",()=>{
     cy.waitUntil(()=>homePage.enterEmailAddress().scrollIntoView());
     cy.waitUntil(()=>homePage.getSubscriptionHeading().should('be.visible').should('have.text','Subscription'));
     cy.waitUntil(()=>homePage.clickSubscribeButton().should('be.visible'));
});

And("enter the email",()=>{
cy.waitUntil(()=>homePage.enterEmailAddress().should('be.visible').type('jackWork@hotmail.com'));
})

When("click subscripe button",()=>{
    cy.waitUntil(()=>homePage.clickSubscribeButton().click());
})

Then("user is able to view the success message.",()=>{
    cy.waitUntil(()=>homePage.getSubscriptionSuccessMessage().should('have.text','You have been successfully subscribed!'));    
})

When("click on cart option",()=>{
    cy.waitUntil(()=>homePage.clickCartButton().click());
})

Then("user is able to view the cart page",()=>{
    cy.url().should('include','view_cart');    
})