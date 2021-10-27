it('Success page should display', {tags: 'regression'},function () {
    cy.visit('/success')

    cy.contains('div', 'congrats!')
        .should('be.visible')
    cy.contains('div', 'Stripe has successfully processed your payment')
        .should('be.visible')
});