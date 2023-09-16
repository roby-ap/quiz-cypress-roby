class LoginPage {

    elements = {

        loginBtn : () => cy.get('.ico-login')
    
    }

    clickLoginBtn() {

        this.elements.loginBtn().click()

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
  
export default new LoginPage()