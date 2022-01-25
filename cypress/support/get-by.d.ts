declare namespace Cypress {
    interface Chainable {
        /**
         * Find element by data-testId with optional previousSubject and/or text
         */
        byTestid(testId: string, containsText?: string, options: object): Chainable<any>
    }
}