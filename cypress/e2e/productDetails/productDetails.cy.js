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
    cy.waitUntil(()=>productsPage.getAllProduct_SearchedHeading().should('be.visible').should('have.text','All Products'));
    cy.waitUntil(()=>productsPage.getCategoryBrandsHeading().eq(0).should('be.visible').should('have.text','Category'));
    productsPage.getAllProductList().each(($el)=>{
       cy.wrap($el).should('be.visible');
      })
})

And("click on view product of first product",()=>{
  //click  

  cy.waitUntil(()=>productsPage.clickFirstProductLink().click());
    cy.url().should('include','/product_details');
})

Then("user should view the product details product name, category, price, availability, condition, brand",()=>{
  cy.waitUntil(()=>productsPage.getFirstProductImage().should('be.visible'));
  cy.waitUntil(()=>productsPage.getProductName().should('have.text','Blue Top'));
  cy.waitUntil(()=>productsPage.getNumberOfQuantityOfProduct().should('have.value','1'));
  cy.waitUntil(()=>productsPage.getCategoryDetails().eq(0).should('have.text','Category: Women > Tops'));
  cy.waitUntil(()=>productsPage.getCategoryDetails().eq(1).should('be.visible').should('have.text','Availability: In Stock'));
  cy.waitUntil(()=>productsPage.getCategoryDetails().eq(2).should('be.visible').should('have.text','Condition: New'));
  cy.waitUntil(()=>productsPage.getCategoryDetails().eq(3).should('be.visible').should('have.text','Brand: Polo'));
  cy.waitUntil(()=>productsPage.clickAddToCartButton().should('be.visible').should('be.enabled'));
})

And("increase the quantity of the product.",()=>{
  cy.waitUntil(()=>productsPage.getNumberOfQuantityOfProduct().clear().type('4'));
  cy.waitUntil(()=>productsPage.getNumberOfQuantityOfProduct().should('have.value','4'));
})

And("click addToCart button",()=>{
  cy.waitUntil(()=>productsPage.clickAddToCartButton().click());
})

When("click the View cart button",()=>{
cy.get('.modal-content div p a').should('be.visible').click();
    cy.url().should('include','/view_cart');
})

 Then("user should view the updated addToCart page with product details",()=>{
 //Processed to checkout button
    cy.get('.btn.btn-default.check_out').should('be.visible');
    
    // //Row heading for the table
    cy.get('.cart_menu td').should('have.length','6').each(($el)=>{
        cy.wrap($el).should('be.visible')});
    //getDescription
    cy.get('table#cart_info_table tbody td h4 a').should('contain','Blue Top');
    let firstProductPrice;
    cy.get('tbody tr#product-1 td.cart_price p').should('be.visible');
    cy.get('tbody tr#product-1 td.cart_quantity button.disabled').then(($div) => {
      firstProductPrice = $div.text(); // Extract the text
   });
    cy.log('The product price is '+firstProductPrice);
    cy.get('tbody tr#product-1 td.cart_total p.cart_total_price').should('be.visible').should('contain','2000');
})

/**
 * Scenario: verify the user is able to view the brand products
 */

And("verify the brand visible on left sidebar",()=>{
  cy.waitUntil(()=>homePage.clickCategory_BrandsButton().eq(1).should('be.visible'));
  let noOfBrands = homePage.getNoOfBrandList().length;
  cy.log(noOfBrands);
  cy.waitUntil(()=>homePage.getNoOfBrandList().should('have.length',8));
  cy.waitUntil(()=>homePage.clickBrandName(data.BrandsName[1]).click());
  cy.waitUntil(() =>
    productsPage
      .getCategoryOptionHeadingForProducts()
      .should("be.visible")
      .should("have.text", `Brand - ${data.BrandsName[1]} Products`)
  );
    cy.waitUntil(()=>homePage.clickBrandName(data.BrandsName[6]).click());
      cy.waitUntil(() =>
    productsPage
      .getCategoryOptionHeadingForProducts()
      .should("be.visible")
      .should("have.text", `Brand - ${data.BrandsName[6]} Products`)
  );
})