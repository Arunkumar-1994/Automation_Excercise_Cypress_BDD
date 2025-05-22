class paymentPage {
    /**
     * url: cy.url().should('include','payment');
     */

    getPaymentHeading(){
        return cy.get('.step-one h2');
    }

    enterNameOnCard(){
        return cy.get('#payment-form div div input[name="name_on_card"]');
    }

    enterCardNumber(){
        return cy.get('#payment-form div div input[name="card_number"]');
    }

    enterCvcNumber(){
        return cy.get('#payment-form div div input[name="cvc"]');
    }

    enterExpiryMonth(){
        return cy.get('#payment-form div div input[name="expiry_month"]');
    }

    enterExpiryYear(){
        return cy.get('#payment-form div div input[name="expiry_year"]');
    }

    clickPayAndConfirmOrder(){
        return cy.get('#submit');
    }

    /**
     * cy.url().should('contains','/payment_done/');
     */

    clickDownloadInvoice(){
        return cy.get('.btn.btn-default.check_out');
    }

    clickContinueButton(){
        return cy.get('.btn.btn-primary');
    }
}
export default paymentPage;