// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import RegPage from '../support/page-objects/registerPage.js'

Cypress.Commands.add('doRegistration', (gender, firstname, lastname, email, password, confpassword) => {

    if (gender == 1) {

        cy.log(RegPage.chooseMale())
    
    } else {
    
        cy.log(RegPage.chooseFemale())
    
    }

    if (firstname != '') {

        RegPage.fillFirstName(firstname)
        
    }

    if (lastname != '') {

        RegPage.fillLastName(lastname)

    }

    if (email != '') {

        RegPage.fillEmail(email)

    }

    if (password != '') {

        RegPage.fillPassword(password)

    }

    if (confpassword != '') {

        RegPage.fillConfPassword(confpassword)

    }

})

Cypress.Commands.add('checkIsRequired', (gender, firstname, lastname, email, password, confpassword) => {

    RegPage.elements.validationIsRequired1()
    .should(firstname == '' ? 'be.visible' : 'not.exist')

    RegPage.elements.validationIsRequired2()
    .should(lastname == '' ? 'be.visible' : 'not.exist')

    RegPage.elements.validationIsRequired3()
    .should(email == '' ? 'be.visible' : 'not.exist')

    RegPage.elements.validationIsRequired4()
    .should(password == '' ? 'be.visible' : 'not.exist')

    RegPage.elements.validationIsRequired5()
    .should(confpassword == '' || password != confpassword ? 'be.visible' : 'not.exist')

    if(firstname == ''){
        RegPage.elements.validationIsRequired1()
        .should('include.text', 'is required.')
    }

    if(lastname == ''){
        RegPage.elements.validationIsRequired2()
        .should('include.text', 'is required.')
    }

    if(email == ''){
        RegPage.elements.validationIsRequired3()
        .should('include.text', 'is required.')
    }

    if(password == ''){
        RegPage.elements.validationIsRequired4()
        .should('include.text', 'is required.')
    }

    if(confpassword == ''){
        RegPage.elements.validationIsRequired5()
        .should('include.text', 'is required.')
    }

    if(confpassword != password && confpassword != '' && password != ''){
        RegPage.elements.validationIsRequired5()
        .should('include.text', 'do not match.')
    }

})