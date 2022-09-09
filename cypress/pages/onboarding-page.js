import Page from './page'

class OnboardingPage extends Page {

    elems = {
        creationSuccessAlert : () => cy.contains('Account created successfully'),
        ctaTitle : () => cy.contains('Start creating now'),
        downloadAppBtn : () => cy.get('[data-test-id="onboarding-downloads-app-cta"]'),
        installExtensionBtn : () => cy.get('[data-test-id="onboarding-downloads-chrome-cta"]')
    }

    isSignedUp () {
        cy.url().should('include', '/onboarding')
        this.elems.creationSuccessAlert().should('be.visible')
        this.elems.ctaTitle().should('be.visible')
        this.elems.downloadAppBtn().should('not.be.disabled')
        this.elems.installExtensionBtn().should('not.be.disabled')
        this.elems.creationSuccessAlert().should('not.exist')
    }

}

module.exports = new OnboardingPage()
