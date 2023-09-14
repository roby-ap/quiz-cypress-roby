describe('template spec', () => {

  beforeEach(() => {
    
    // cy.viewport(1536, 960)

    cy.visit('')

    Cypress.on('uncaught:exception', (err, runnable) => {  
      return false  
    })

  })

  it('Website can access', () => {

    cy.visit('')

    cy.get('.topic-html-content-header').should('include.text','Welcome to our store')

  })

})