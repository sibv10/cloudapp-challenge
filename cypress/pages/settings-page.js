import Page from './page'

class SettingsPage extends Page {

    elems = {
        formAvatar : () => cy.get('form #avatar'),
        mainMenuAvatar : () => cy.get('#main-menu #avatar'),
        chooseFileBtn : () => cy.get('#user_avatar[type=file]'),
        submitBtn : () => cy.get('[data-testid="onboarding-submit-about-you-form"]'),
    }

    changeAvatar (filename) {
        this.elems.chooseFileBtn().attachFile(filename)
        this.elems.submitBtn().click()
    }

    hasMatchingAvatarInMenu () {
        const expSlug = '/avatar.png'

        this.elems.formAvatar()
            .should('have.css', 'background-image')
            .and('include', expSlug)
        this.elems.formAvatar()
            .invoke('css', 'background-image')
            .then((img1) => {
                this.elems.mainMenuAvatar()
                    .invoke('css', 'background-image')
                    .then((img2) => {
                        expect(img1).to.equal(img2)
                    })
            })
    }

}

module.exports = new SettingsPage()
