import Page from './page'
import links from '../fixtures/links.json'
import testUser from '../fixtures/testUser.json'

class SignupPage extends Page {

    elems = {
        emailInput : () => cy.get('#email'),
        pwInput : () => cy.get('#password'),
        signupBtn : () => cy.get('[data-testid="regular-signup-submit"]')
    }

    signup (email = testUser.email, pw = testUser.password) {
        this._clearForm()
        this.elems.emailInput().type(email)
        this.elems.pwInput().type(pw)
        this.elems.signupBtn().click()
    }

    _clearForm () {
        this.elems.emailInput().clear()
        this.elems.pwInput().clear()
    }

    /**
     * Generates valid email (not Signed Up)
     * @returns alias of existing account eg cloudappqaauto+1662672717@gmail.com
     */
    generateEmailAlias () {
        const timestampInSec = Math.floor(Date.now() / 1000)

        return testUser.email.replace('@gmail.com', `+${timestampInSec}@gmail.com`)
    }

    navigate () {
        // @BUG? cypress detected Uncaught Exception on Signup page load 
        cy.once('uncaught:exception', () => false);
        cy.visit(links.signup)
    }

}

module.exports = new SignupPage()
