import Page from './page'
import links from '../fixtures/links.json'

class HomePage extends Page {

    elems = {
        loginLnk : () => cy.get('#login-dblue'),
    }

    navigate () {
        cy.visit(links.home)
    }

}

module.exports = new HomePage()
