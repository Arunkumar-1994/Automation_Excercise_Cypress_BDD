class signUpPage{

    getAccountInformationHeadingText(){
        // Enter Account Information
        return cy.get('.login-form h2.title.text-center b').eq(0);
    }

    getAddressInformationHeadingText(){
        // Address Information
        return cy.get('.login-form h2.title.text-center b').eq(1);
    }
    
    selectMrTitle(){
        return cy.get('#id_gender1');
    }

    selectMrsTitle(){
        return cy.get('#id_gender2');
    }

    getDisplayName(){
        //get the value and store in a variable and for the validation purpose we can use it.
        return cy.get('.required.form-group input#name');
    }

    getDisplayEmailName(){
        // get the value for the email id.
        return cy.get('.required.form-group input#email');
    }

    enterPassword(){
        return cy.get('.required.form-group input#password');
    }

    clickDayOption(){
        return cy.get('#days');
    }

    selectDayOption(selectDay){
        return cy.get('#uniform-days select option').eq(selectDay);
    }

    clickMonthOption(){
        return cy.get('#months');
    }

    selectMonthOption(){
        return cy.get('#months option').eq(selectMonth);
    }

    clickYearOption(){
        return cy.get('#years');
    }

    selectYearOption(){
        return cy.get('#years option').eq(selectYear);
    }

    checktheNewsLetterOption(){
        return cy.get('input#newsletter');
    }

    checktheSpecialOfferOption(){
        return cy.get('input#optin');
    }

    enterPassword(){
        return cy.get('#password');
    }

    enterFirstName(){
        return cy.get('#first_name');
    }

    enterLastName(){
        return cy.get('#last_name');
    }

    enterCompanyName(){
        return cy.get('#company');
    }

    enterAddressFirst(){
        return cy.get('#address1');
    }

    enterAddressSecond(){
        return cy.get('#address2');;
    }

    enterState(){
        return cy.get('#state');
    }

    enterCity(){
        return cy.get('#city');
    }

    enterZipcode(){
        return cy.get('#zipcode');
    }

    enterMobileNumber(){
        return cy.get('#mobile_number');
    }

    clickCreateAccountButton(){
        return cy.get('.login-form form button.btn.btn-default');
    }

    getSucces_Delete_MessageHeading(){
        //Account Created!    //Account Deleted! //Order Placed!
        return cy.get('.col-sm-9.col-sm-offset-1 h2 b');
    }

    getCongratulation_Delete_Message(){
        //Congratulations! Your new account has been successfully created!
        //Your account has been permanently deleted!
        //Congratulations! Your order has been confirmed!
        return cy.get('.col-sm-9.col-sm-offset-1 p').eq(0);
    }

    getSuccessContentMessage(){
        //You can now take advantage of member privileges to enhance your online shopping experience with us.
        //You can create new account to take advantage of member privileges to enhance your online shopping experience with us.
        return cy.get('.col-sm-9.col-sm-offset-1 p').eq(1);
    }

    clickContinueButton(){
        return cy.get('.btn.btn-primary');
    }

}
export default signUpPage;