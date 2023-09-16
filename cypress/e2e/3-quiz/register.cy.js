import RegPage from '../../support/page-objects/registerPage.js'

describe('template spec', () => {

  var randomValue = `${Date.now()}`

  var gender = randomValue % 2

  var firstname = "John " + randomValue

  var lastname = "Doe " + randomValue
  
  var email = randomValue + '@myemail.com'

  var password = "ThisISNotAPassword"

  beforeEach(() => {

    cy.visit('')

    Cypress.on('uncaught:exception', (err, runnable) => {  
      return false  
    })

  })

  it('Website can access', () => {

    cy.get('.topic-html-content-header').should('include.text','Welcome to our store')

  })

  it('Can access correct register page', () => {

    RegPage.clickRegisterBtn()

    cy.url().should('include', '/register')

  })

  it.only('Register failed, field is empty', () => {

    cy.fixture('dataTest.json').then((data) => {

      const dt = data;

      for (let i = 6; i < dt.registration.length; i++) { // start loop

        cy.log("data registrasi ke "+i)

        var datagender = ''
        var datafirstname = ''
        var datalastname = ''
        var dataemail = ''
        var datapassword = ''
        var dataconfpassword = ''

        if (dt.registration[i].gender) {

          var datagender = gender

        }

        if (dt.registration[i].firstname) {

          var datafirstname = firstname

        }

        if (dt.registration[i].lastname) {

          var datalastname = lastname

        }

        if (dt.registration[i].email) {

          var dataemail = email

        }

        if (dt.registration[i].password) {

          var datapassword = password

        }

        if (dt.registration[i].confpassword) {

          var dataconfpassword = password

        }

        cy.log(datagender, datafirstname, datalastname, dataemail, datapassword, dataconfpassword)
        
        RegPage.clickRegisterBtn()

        cy.doRegistration(datagender, datafirstname, datalastname, dataemail, datapassword, dataconfpassword)

        cy.get('#register-button').click()

        cy.checkIsRequired(datagender, datafirstname, datalastname, dataemail, datapassword, dataconfpassword)

        RegPage.clickContinueRegBtn(dataemail)

      } // end loop

    })

  })

  // it('', () => {

  // })

  // it('', () => {

  // })

  // it('', () => {

  // })

  // it('', () => {

  // })

  // it('', () => {

  // })

})