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


// although stripe is 3rd party, we are testing to showcase cypress features
// and adding negative test cases
describe('Invalid card details', { tags: ['regression', 'negative'] }, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // we use lodash '_.times()' to iterate over array of invalid inputs
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