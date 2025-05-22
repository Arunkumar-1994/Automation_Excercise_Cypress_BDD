class cartPage {

    clickProceedToCheckOutButton(){
        return cy.get('.btn.btn-default.check_out');
    }

    getTableHeading(){
        return cy.get('.cart_menu td').should('have.length','6').each(($el)=>{
        cy.wrap($el).should('be.visible')});
    }

    getProductDescription(){
        return cy.get('table#cart_info_table tbody td h4 a');
    }

    getProducPrice(){
        return cy.get('tbody tr#product-1 td.cart_price p');
    }

    getQuantityOfProduct(){
        return cy.get('tbody tr#product-1 td.cart_quantity button.disabled');
    }

    getTotalPriceOfProduct(){
        return cy.get('tbody tr#product-1 td.cart_total p.cart_total_price');
    }
    
    clickRemoveProductButton(){
        return cy.get('td a.cart_quantity_delete');
    }

    
    
}
export default cartPage;