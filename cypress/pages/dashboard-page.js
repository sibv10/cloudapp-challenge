import Page from './page'
import links from '../fixtures/links.json'
import testUser from '../fixtures/testUser.json'

class DashboardPage extends Page {

    elems = {
        avatarDd : () => cy.get('#main-menu'),
        emailDdi : () => cy.get('div.dropdown-menu-right .dropdown-item').first(),
        settingsDdi : () => cy.get('[data-testid="dropdown-link-settings"]'),
        signOutDdi : () => cy.get('[data-testid="dropdown-link-sign_out"]')
    }

    isLoggedIn () {
        this.checkURL(links.dashboard)
        this._displaysCorrectEmail()
    }

    _displaysCorrectEmail () {
        this.elems.avatarDd().click()
        this.elems.emailDdi().should('be.visible').and('contain', testUser.email)
        this.elems.avatarDd().click()
    }

    logout () {
        this.elems.avatarDd().click()
        this.elems.signOutDdi().click()
    }

}

module.exports = new DashboardPage()
