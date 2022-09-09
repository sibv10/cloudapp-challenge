class Page {

    /**
     * Checks URL equals specified string
     * @param {string} url
     */
    checkURL (url) {
        cy.url().should('eq', url)
    }

    /**
     * Checks page displays element with specified text 
     * @param {string} text
     */
    hasTextElement (string) {
        cy.contains(new RegExp(`^${string}$`, 'g')).should('be.visible')
    }

}

export default Page
