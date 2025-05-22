class checkOutPage{

  getDeliveryAddressSection(){
    return cy.get('#address_delivery');
  }

  getDeliveryHeading(){
    return cy.get('#address_delivery .address_title h3.page-subheading');
  }  

  getFirst_LastName(){
    return cy.get('#address_delivery .address_firstname.address_lastname');
  }

  getAddressDetails(){
    // 3 lists. eq(2);
    return cy.get('#address_delivery .address_address1.address_address2');
  }

  getAddressCityStatePostcode(){
    return cy.get('#address_delivery .address_city.address_state_name.address_postcode');
  }

  getCountryName(){
    return cy.get('#address_delivery .address_country_name');
  }

  getPhoneNumber(){
    return cy.get('#address_delivery .address_phone');
  }

  getProductDescription(){
    return cy.get('#cart_info tbody td h4 a');
  }

  getSingleProductPrice(){
    return cy.get('#cart_info tbody td.cart_price p');
  }

  getProductQuantity(){
    return cy.get('#cart_info tbody td.cart_quantity button');
  }

  getTotalPrice(){
    return cy.get('#cart_info tbody td.cart_total p');
  }

  getOrderMessageHeading(){
    //If you would like to add a comment about your order, please write it in the field below.
    return cy.get('#ordermsg label');
  }

  enterDescriptionMessage(){
    return cy.get('.container div#ordermsg textarea[name="message"]')
  }
  clickPlaceOrderButton(){
    return cy.get('a.btn.btn-default.check_out');
  }

  


}
export default checkOutPage;