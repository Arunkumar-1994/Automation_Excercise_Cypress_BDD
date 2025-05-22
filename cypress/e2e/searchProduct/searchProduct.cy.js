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


And("addToCart the first product",()=>{
    //Click Add to cart button of first product
    cy.get('.btn.btn-default.add-to-cart').eq(0).click();
    //Confirm dialog box validated
    cy.get('div.modal-dialog.modal-confirm div.modal-content').should('be.visible');
    //Heading as Added
    cy.get('.modal-content div h4').should('be.visible').should('have.text','Added!');
    //Added cart sentence: 
    cy.get('.modal-content div p').eq(0).should('be.visible').should('have.text','Your product has been added to cart.');
    //click View cart button
    cy.get('.modal-content div p a').should('be.visible');
    //click continue button
    cy.get('.modal-content .modal-footer button').should('be.enabled').click();
})

And("addToCart the second product",()=>{
    //Click Add to cart button of first product
    cy.get('.btn.btn-default.add-to-cart').eq(2).click();
    //Confirm dialog box validated
    cy.get('div.modal-dialog.modal-confirm div.modal-content').should('be.visible');
    //Heading as Added
    cy.get('.modal-content div h4').should('be.visible').should('have.text','Added!');
    //Added cart sentence: 
    cy.get('.modal-content div p').eq(0).should('be.visible').should('have.text','Your product has been added to cart.');
    //click continue button
    cy.get('.modal-content .modal-footer button').should('be.enabled');
    })

When("click view cart button",()=>{
//click View cart button
    cy.get('.modal-content div p a').should('be.visible').click();
    cy.url().should('include','/view_cart');

})

Then("user should view the addToCart page with searched product details",()=>{
 //Processed to checkout button
    cy.get('.btn.btn-default.check_out').should('be.visible');
    
    // //Row heading for the table
    cy.get('.cart_menu td').should('have.length','6').each(($el)=>{
        cy.wrap($el).should('be.visible')});
    //getDescription
    cy.get('table#cart_info_table tbody td h4 a').eq(0).should('have.text','Men Tshirt');//Men Tshirt
    // let firstProductPrice;
    // cy.get('tbody tr#product-1 td.cart_price p').should('be.visible');
  //   cy.get('tbody tr#product-1 td.cart_quantity button.disabled').then(($div) => {
  //     firstProductPrice = $div.text(); // Extract the text
  //  });
    // cy.log('The product price is '+firstProductPrice);
    // cy.get('tbody tr#product-1 td.cart_total p.cart_total_price').eq(0).should('be.visible').should('contain','400');
})

And("click on Signup Login button", () => {
    cy.waitUntil(() => homePage.clickLoginButton().should("be.visible").click());
    cy.url().should("include", "/login");
    cy.waitUntil(() => loginPage.getLoginFormContentBox().should("be.visible"));
    cy.waitUntil(() =>
      loginPage.getLoginFormText().should("have.text", "Login to your account")
    );
    cy.waitUntil(() => loginPage.enterEmailAddress().should("be.enabled"));
    cy.waitUntil(() => loginPage.enterPassword().should("be.visible"));
    cy.waitUntil(() => loginPage.clickLoginButton().should("be.enabled"));
});


And("enter the email and password",()=>{
    cy.waitUntil(() => loginPage.enterEmailAddress().type('Raoul.Veum14@yahoo.com'));
    cy.waitUntil(() => loginPage.enterPassword().type("Pa55w0rd!"));    
})

When("click login button",()=>{
    cy.waitUntil(() => loginPage.clickLoginButton().click());
})

Then("verify the user is logged in the application",()=>{
    cy.waitUntil(() =>
      homePage.clickDeleteAccountButton().should("be.visible")
    );
    cy.waitUntil(() => homePage.getLoggedInAsButton().should("be.visible"));
    cy.waitUntil(() => homePage.clickLogoutButton().should("be.visible"));
})

When("click cart button",()=>{
  cy.waitUntil(()=>homePage.clickCartButton().click());
})