import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import ProductsPage from "../../support/pageObjects/productsPage";
import CartPage from "../../support/pageObjects/cartPage";


const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

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
    cy.waitUntil(()=>productsPage.getAllProductList().each(($el)=>{
       cy.wrap($el).should('be.visible');
      }))
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

Then("user should view the addToCart page with product details",()=>{
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
    cy.get('tbody tr#product-1 td.cart_total p.cart_total_price').should('be.visible').should('contain','500');
})

/**



And("increase the quantity of the product",()=>{

})

And("click addToCart button",()=>{

})
     */

// When("click on view cart button in the product page",()=>{
    // cy.waitUntil(()=>productsPage.clickViewProductButton().click({force:true}));  
// })

// Then("user should view the product details",()=>{
//     cy.url().should('include','/product_details')
// })

And("click the remove button from the products",()=>{  
  let NoOfRemoveItems = cartPage.clickRemoveProductButton().length;
  // for (let i =0 ; i < NoOfRemoveItems ; i++){
  //   cy.waitUntil(()=>cartPage.clickRemoveProductButton().eq([i]).click());
  //   console.log(NoOfRemoveItems);
  // }
      cy.waitUntil(()=>cartPage.clickRemoveProductButton().eq(0).click());
})