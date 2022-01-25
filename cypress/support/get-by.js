/// <reference types="cypress" />

Cypress.Commands.add('byTestid', { prevSubject: 'optional' }, (subject, testId, containsText, options) => {
    const query = `[data-testid=${testId}]`
    const noLog = { log: false } // suppress wrap command log

    if (containsText) {
        if (subject) {
            // scenario where we have subject and find by text
            return cy.wrap(subject, noLog).contains(query, containsText, options)
        }
        // scenario where we find by text
        return cy.contains(query, containsText, options)
    }

    if (subject) {
        // scenario where we have subject
        return cy.wrap(subject, noLog).find(query, options)
    }
    // scenario where we only have data-testid attribute
    return cy.get(query, options)
})