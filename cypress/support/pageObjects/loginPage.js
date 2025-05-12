class loginPage{

    /**
     * 
     * @returns Login form content and Email address, password and Login button.
     */
 getLoginFormContentBox(){
    return cy.get('div.login-form');
 }

 getLoginFormText(){
    //Text is Login to your account
    return cy.get('div.login-form h2');
 }
 
 enterEmailAddress(){
    return cy.xpath("//input[@data-qa='login-email']");
 }
 enterPassword(){
    return cy.xpath("//input[@data-qa='login-password']");
 }
 clickLoginButton(){
    return cy.xpath("//button[@data-qa='login-button']");
 }

 getIncorrectEmailPasswordMessage(){
   //Your email or password is incorrect!
   return cy.get('div.login-form form p');
 }

     /**
     * 
     * @returns signup form content and Email address, name and signup button.
     */
     
     getSignUpFormContentBox(){
        return cy.get('.col-sm-4 div.signup-form');
     }

     getSignUpFormText(){
        //Text New User Signup!
        return cy.get('.col-sm-4 div.signup-form h2');
     }

     enterUserName(){
        return cy.xpath("//input[@data-qa='signup-name']");
     }

     enterSignUpEmailAddress(){
        return cy.xpath("//input[@data-qa='signup-email']");
     }

     clickSignUpButton(){
        return cy.xpath("//button[@data-qa='signup-button']");
     }





     
}
export default loginPage;