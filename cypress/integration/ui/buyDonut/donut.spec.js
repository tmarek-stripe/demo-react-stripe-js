describe('Donut', { tags: 'regression' }, function () {
    beforeEach(() => {
        cy.visit('/')
    })

    it('+ should increment amount', function () {
        cy.get('input[value]', { log: false })
            .then(donutCount => {

                //sets initial value of donut count
                const initialValue = donutCount.val()
                cy.log('Initial donut count is ' + initialValue)

                //increment amount
                cy.contains('span', '+', { log: false })
                    .click({ log: false })

                //validate new count is greater
                cy.get('input[value]', { log: false })
                    .then(newDonutCount => {
                        expect(parseInt(newDonutCount.val())).to.be.gt(parseInt(initialValue))
                    })
            })
    });

    it('- should not decrement below 1', function () {
        cy.get('input[value]', { log: false })
            .then(donutCount => {

                //sets initial value of donut count
                const initialValue = donutCount.val()
                cy.log('Initial donut count is ' + initialValue)

                //increment amount
                cy.contains('span', '–', { log: false })
                    .click({ log: false })

                //validate new count is greater
                cy.get('input[value]', { log: false })
                    .then(newDonutCount => {
                        expect(parseInt(newDonutCount.val())).to.be.eq(parseInt(initialValue))
                    })
            })
    });

    it('+ should increment price', function () {
        cy.contains('button', 'Pay')
            .then(price => {

                const initialPriceText = price.text()
                const initialPrice = initialPriceText.substring(initialPriceText.indexOf('$') + 1)

                //increment amount
                cy.contains('span', '+', { log: false })
                    .click({ log: false })

                //validate new price is greater
                cy.contains('button', 'Pay')
                    .then(price => {
                        const newPriceText = price.text()
                        const newPrice = newPriceText.substring(newPriceText.indexOf('$') + 1)
                        expect(parseFloat(newPrice)).to.be.gt(parseFloat(initialPrice))
                    })
            })
    });
});

describe('Donut Payment', function () {
    const validCardUserDetails = {
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

    it('payment should be successful', { tags: 'smoke' }, function () {
        //spy requests for successful payment
        cy.intercept('POST', 'https://api.stripe.com/v1/payment_methods').as('payment')
        cy.intercept('POST', 'api/payment_intents').as('paymentIntents')
        cy.intercept('POST', 'https://api.stripe.com/v1/payment_intents/*/confirm').as('paymentConfirm')
        cy.intercept('GET', '_next/static/development/_devPagesManifest.json').as('devPages')

        cy.visit('/')

        cy.enterCardUserDetails(validCardUserDetails)
        cy.enterCardDetails(validCardDetails)

        cy.contains('button', 'Pay', { log: false })
            .click({ log: false })
        cy.log('Processing Payment')
        cy.wait([
            '@payment',
            '@paymentIntents',
            '@paymentConfirm',
            '@devPages'
        ])


        cy.url().should('eq', Cypress.config('baseUrl') + '/success')
    });
})