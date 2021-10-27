const invalidCardDtails = {
    cardNumber: '1234 4242 4242 4242',
    expDate: '0422',
    cvc: '222'
}
it('incorrect card details should prompt error message',{tags: '@regression'}, function () {
    cy.visit('/')

    cy.enterCardDetailsIniframe(invalidCardDtails)
    cy.contains('div', 'Your card number is invalid.')
        .should('be.visible')
});