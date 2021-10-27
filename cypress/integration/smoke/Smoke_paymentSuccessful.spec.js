
const cardUserDetails = {
    fullName: 'Cypress User',
    email: 'cypresstesting@gmail.com',
    address: '123 mail lane',
    city: 'Austin',
    state: 'Texas',
    zip: '78701'
}
const validCardDetails = {
    cardNumber: '4242 4242 4242 4242',
    expDate: '0422',
    cvc: '222'
}

it('payment should be successful',{tags: '@smoke'}, function () {
    //spy requests for successful payment
    cy.intercept('POST','https://api.stripe.com/v1/payment_methods').as('payment')
    cy.intercept('POST','api/payment_intents').as('paymentIntents')
    cy.intercept('POST', 'https://api.stripe.com/v1/payment_intents/*/confirm').as('paymentConfirm')
    cy.intercept('GET','_next/static/development/_devPagesManifest.json').as('devPages')

    cy.visit('/')

    cy.enterCardUserDetails(cardUserDetails)
    cy.enterCardDetailsIniframe(validCardDetails)

    cy.contains('button', 'Pay',{log:false})
        .click({log:false})
    cy.log('Processing Payment')
    cy.wait([
        '@payment',
        '@paymentIntents',
        '@paymentConfirm',
        '@devPages'
    ])


    cy.url().should('eq',Cypress.config('baseUrl') + '/success')
});