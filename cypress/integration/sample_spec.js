describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')
    })

    it('finds the content "type"', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })

    it('clicks the link "type"', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })

    it('clicking "type" navigates to a new url', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
})