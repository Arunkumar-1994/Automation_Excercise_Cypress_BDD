import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

/*
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
  */
Given("Login to the application", ()=>{
cy.visit("https://www.automationexercise.com/");
cy.title().should('eq','Automation Exercise');

cy.wait(5000);
})