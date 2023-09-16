class RegisterPage {

    elements = {

        registerBtn : () => cy.get(".ico-register"),

        genderMale : () => cy.get('#gender-male'),

        genderFemale : () => cy.get('#gender-female'), 

        firstNameField : () => cy.get('#FirstName'), 
        
        lastNameField : () => cy.get('#LastName'),

        emailField : () => cy.get('#Email'),

        passField : () => cy.get('#Password'),

        confPassField : () => cy.get('#ConfirmPassword'),

        // registrationBtn : () => cy.get('#register-button'),

        continueRegBtn : () => cy.get('.page-body > .buttons > .button-1'),

        validationIsRequired1 : () => cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span'),

        validationIsRequired2 : () => cy.get(':nth-child(3) > .field-validation-error > span'),

        validationIsRequired3 : () => cy.get(':nth-child(4) > .field-validation-error > span'),

        validationIsRequired4 : () => cy.get(':nth-child(1) > .field-validation-error > span'),

        validationIsRequired5 : () => cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span'),

        logout : () => cy.get('.ico-logout'),

        myaccount : () => cy.get('.header-links > ul > :nth-child(1) > .account')

    }

    clickRegisterBtn() {
        this.elements.registerBtn()
        .click();
    }

    chooseMale(){
        this.elements.genderMale()
        .click();
    }

    chooseFemale(data){
        this.elements.genderFemale()
        .click();
    }

    fillFirstName(data){
        this.elements.firstNameField()
        .type(data)

        this.elements.firstNameField()
        .should('have.value', data)
    }

    fillLastName(data){
        this.elements.lastNameField()
        .type(data)
        
        this.elements.lastNameField()
        .should('have.value', data)
    }

    fillEmail(data){
        this.elements.emailField()
        .type(data)
        
        this.elements.emailField()
        .should('have.value', data)
    }

    fillPassword(data){
        this.elements.passField()
        .type(data)
        
        this.elements.passField()
        .should('have.value', data)
    }

    fillConfPassword(data){

        this.elements.confPassField()
        .type(data)
        
        this.elements.confPassField()
        .should('have.value', data)
    }

    // clickRegisterBtn(){
    //     this.elements.registrationBtn().click();
    // }

    clickContinueRegBtn(data){

        this.elements.continueRegBtn()
        .should('be.visible')
        .click()

        this.checkSuccessLogin(data)

    }

    checkSuccessLogin(data) {

        if (this.elements.logout().should('be.visible')) {

            this.elements.logout()
            .should('be.visible')

            this.elements.myaccount()
            .should('have.text', data)

            cy.log('LOGIN BERHASIL ' + data)
        }

    }
  
    // fillUsername(username) {
    //   cy.get('input[name="username"]').type(username)
    // }
  
    // fillPassword(password) {
    //   cy.get('input[name="password"]').type(password)
    // }
  
    // clickLoginButton() {
    //   cy.get('button[type="submit"]').click()
    // }

}
  
export default new RegisterPage()