import LoginPage from '../../support/page-objects/loginPage.js'

describe('template spec', () => {

  beforeEach(() => {
    
    // cy.viewport(1536, 960)

    cy.visit('')

    Cypress.on('uncaught:exception', (err, runnable) => {  
      return false  
    })

  })

  it('Website can access', () => {

    cy.get('.topic-html-content-header').should('include.text','Welcome to our store')

  })

  it('Can access correct login page', () => {

    LoginPage.clickLoginBtn()

    cy.url().should('include', '/login')

  })

})