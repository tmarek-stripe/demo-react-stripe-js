const invalidCardDtails = [
    1234,
    12341234,
    123412341234,
    1234123412341234
]

const invalidExpDates = [
    '1',
    '99',
    '999'
]

const invalidCVC = [
    0,
    12
]

describe('Invalid card details', { tags: ['regression', 'negative'] }, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    Cypress._.times(invalidCardDtails.length, (k) => {
        const cardNumber = invalidCardDtails[k]
        it(`${invalidCardDtails[k]} is invalid card number`, () => {
            cy.enterCardDetails({ cardNumber })
            cy.contains('[role=alert]', `Your card number`)
                .should('be.visible')
        })
    })

    Cypress._.times(invalidExpDates.length, (k) => {
        const expDate = invalidExpDates[k]
        it(`${invalidExpDates[k]} is invalid exp date`, () => {
            cy.enterCardDetails({ expDate })
            cy.contains('[role=alert]', `Your card's expiration`)
                .should('be.visible')
        })
    })

    Cypress._.times(invalidCVC.length, (k) => {
        const cvc = invalidCVC[k]
        it(`${invalidCVC[k]} is invalid cvc`, () => {
            cy.enterCardDetails({ cvc })
            cy.contains('[role=alert]', `Your card's security code`)
                .should('be.visible')
        })
    })
})