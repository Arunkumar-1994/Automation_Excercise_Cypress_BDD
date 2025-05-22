class productsPage {
  getSpecialOfferImage() {
    //image should be visible
    return cy.get("#sale_image");
  }

  enterSearchProduct() {
    return cy.get("input#search_product");
  }

  clickSerachButton() {
    return cy.get("button#submit_search");
  }

  getAllProduct_SearchedHeading() {
    //All Products
    //Searched products
    return cy.get(".features_items .title.text-center");
  }

  getCategoryBrandsHeading() {
    //eq 0 => Category
    //eq 1 => Brands
    return cy.get(".left-sidebar h2");
  }

  getAllProductList() {
    return cy.get(".single-products");
  }

  clickFirstProductLink() {
    return cy.get(".product-image-wrapper div.choose ul").eq(0);
  }

  getFirstProductImage() {
    return cy.get(".view-product");
  }

  getNewLabelImage() {
    return cy.get(".product-information .newarrival");
  }

  getProductName() {
    //Blue Top
    return cy.get(".product-information h2");
  }

  getCategoryDetails() {
    //Category: Women > Tops
    return cy.get(".product-information p");
  }

  clickAddToCartButton() {
    return cy.get("button.btn.btn-default.cart");
  }

  getNumberOfQuantityOfProduct() {
    //get value as "1"
    return cy.get("div.product-information span input#quantity");
  }

  getAvailabilityText() {
    //Availability:
    return cy.get(".product-information p b").eq(0);
  }

  getConditionText() {
    //Condition:
    return cy.get(".product-information p b").eq(1);
  }

  getBrandText() {
    //Brand:
    return cy.get(".product-information p b").eq(2);
  }

  clickViewProductButton(){
    return cy.xpath('//*[text()="View Product"]').eq(0);
  }

  getCategoryOptionHeadingForProducts(){
    return cy.get('.features_items h2.title.text-center');
  }
}
export default productsPage;
