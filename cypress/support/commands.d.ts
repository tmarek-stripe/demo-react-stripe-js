declare namespace Cypress {
    interface Chainable {
        /**
         * Enters card details in stripe iframe
         */
        enterCardDetails(cardDetails?: unknown): Chainable<any>

        /**
         * Enters user details in form
         */
        enterCardUserDetails(userDetails?: unknown): Chainable<any>
    }
}