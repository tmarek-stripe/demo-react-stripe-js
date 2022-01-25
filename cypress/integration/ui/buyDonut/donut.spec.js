import { createHorde, species, strategies } from 'gremlins.js';

describe('Donut', { tags: 'regression' }, function () {
    beforeEach(() => {
        cy.visit('/')
    })

    it('+ should increment amount', function () {
        cy.byTestid('DonutQuantity')
            .then(donutCount => {

                // sets initial value of donut count
                const initialValue = donutCount.val()
                cy.log('Initial donut count is ' + initialValue)

                // increment amount
                cy.byTestid('Increment')
                    .click({ log: false })

                // validate new count is greater
                cy.byTestid('DonutQuantity')
                    .then(newDonutCount => {
                        expect(parseInt(newDonutCount.val())).to.be.gt(parseInt(initialValue))
                    })
            })
    });

    it('- should not decrement below 1', function () {
        cy.byTestid('DonutQuantity')
            .then(donutCount => {

                // sets initial value of donut count
                const initialValue = donutCount.val()
                cy.log('Initial donut count is ' + initialValue)

                // decrement amount
                cy.byTestid('Decrement')
                    .click({ log: false })

                // validate new count is greater
                cy.byTestid('DonutQuantity')
                    .then(newDonutCount => {
                        expect(parseInt(newDonutCount.val())).to.be.eq(parseInt(initialValue))
                    })
            })
    });

    it('+ should increment price', function () {
        cy.byTestid('Pay')
            .then(price => {

                const initialPriceText = price.text()
                const initialPrice = initialPriceText.substring(initialPriceText.indexOf('$') + 1)

                // increment amount
                cy.byTestid('Increment')
                    .click({ log: false })

                // validate new price is greater
                cy.byTestid('Pay')
                    .then(price => {
                        const newPriceText = price.text()
                        const newPrice = newPriceText.substring(newPriceText.indexOf('$') + 1)
                        expect(parseFloat(newPrice)).to.be.gt(parseFloat(initialPrice))
                    })
            })
    });
});

describe('Donut Payment', function () {
    beforeEach(() => {
        // spy requests for successful payment
        cy.intercept('POST', 'https://api.stripe.com/v1/payment_methods').as('payment')
        cy.intercept('POST', 'api/payment_intents').as('paymentIntents')
        cy.intercept('POST', 'https://api.stripe.com/v1/payment_intents/*/confirm').as('paymentConfirm')

        cy.visit('/')
    })

    it('payment should be successful', { tags: 'smoke' }, function () {
        const validCardUserDetails = {
            fullName: 'Cypress User',
            email: 'cypresstesting@gmail.com',
            address: '123 mail lane',
            city: 'Austin',
            state: 'Texas',
            zip: 78701
        }
        const validCardDetails = {
            cardNumber: 4242424242424242,
            expDate: '1222',
            cvc: 222
        }

        cy.enterCardUserDetails(validCardUserDetails)
        cy.enterCardDetails(validCardDetails)

        cy.byTestid('Pay')
            .click({ log: false })
        cy.log('Processing Payment')
        cy.wait([
            '@payment',
            '@paymentIntents',
            '@paymentConfirm',
        ])


        cy.url().should('eq', Cypress.config('baseUrl') + '/success')
    });
})

describe.skip('Gremlins run', () => {
    let horde
    beforeEach(() => {
        return cy.visit('/').then(() => {
            cy.window().then(pageWindow => {
                horde = createHorde({
                    species: [
                        species.clicker(),
                        species.formFiller(),
                        species.typer(),
                        species.scroller()
                    ],
                    strategies: [strategies.allTogether({ delay: 8, nb: 500 })],
                    window: pageWindow,
                })
            })
        })
    })

    it('Run gremlins test', () => {
        return cy.wrap(horde.unleash(), { timeout: 8000 }).then(() => {
            // TODO add expected conditions here
        })
    })
})