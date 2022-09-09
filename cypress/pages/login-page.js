import Page from './page'
import links from '../fixtures/links.json'
import testUser from '../fixtures/testUser.json'

class LoginPage extends Page {

    elems = {
        emailInput : () => cy.get('[data-testid="regular-login-email"]'),
        pwInput : () => cy.get('[data-testid="regular-login-password"]'),
        loginBtn : () => cy.get('[data-testid="regular-login-submit"]'),
        logoutSuccessAlert : () => cy.contains('Successfully Logged Out'),
    }

    login (email = testUser.email, pw = testUser.password) {
        this._clearForm()
        this.elems.emailInput().type(email)
        this.elems.pwInput().type(pw)
        this.elems.loginBtn().click()
    }

    _clearForm () {
        this.elems.emailInput().clear()
        this.elems.pwInput().clear()
    }

    isLoggedOut () {
        cy.url().should('eq', links.login)
        this.elems.logoutSuccessAlert().should('be.visible')
    }

    navigate () {
        cy.visit(links.login)
    }

}

module.exports = new LoginPage()
