import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import ProductsPage from "../../support/pageObjects/productsPage";


const homePage = new HomePage();
const productsPage = new ProductsPage();

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

When("click the product option",()=>{
    cy.waitUntil(()=>homePage.clickProductsButton().should('be.visible').click());
})

Then("user should view the product page",()=>{
    cy.url().should('include','/products');
    cy.waitUntil(()=>productsPage.getSpecialOfferImage().should('be.visible'));
    cy.waitUntil(()=>productsPage.enterSearchProduct().should('be.visible'));
    cy.waitUntil(()=>productsPage.clickSerachButton().should('be.enabled'));
})

And("enter the product name in the search bar",()=>{
  cy.waitUntil(()=>productsPage.enterSearchProduct().type('Shirt'));
})

And("click search icon",()=>{
    cy.waitUntil(()=>productsPage.clickSerachButton().click());
})

Then("user should view the respective product details.",()=>{
   cy.url().should('include','?search=Shirt');
   cy.waitUntil(()=>productsPage.getAllProduct_SearchedHeading().should('be.visible').should('have.text','Searched Products'));
   cy.get('.single-products div.productinfo.text-center').should('have.length','13');
   
})