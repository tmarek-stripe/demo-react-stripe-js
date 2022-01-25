const invalidCardDtails = {
    cardNumber: '1234 4242 4242 4242',
}

const invalidExpDates = [
    '1',
    '99',
    '999'
]

const invalidCVC = [
    1,
    12
]


it('incorrect card details should prompt error message', { tags: ['regression', 'negative'] }, function () {
    cy.visit('/')

    cy.enterCardDetails(invalidCardDtails)
    cy.contains('[role=alert]', 'Your card number is invalid.')
        .should('be.visible')
});