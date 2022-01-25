import { createHorde, species, strategies } from 'gremlins.js';

describe('Success', () => {
    beforeEach(() => {
        cy.visit('/success')
    })

    it('Success page should display', { tags: 'regression' }, function () {
        cy.byTestid('Congrats')
            .should('be.visible')
            .and('contain.text', 'congrats')
        cy.byTestid('Message')
            .should('be.visible')
            .and('contain.text', 'Stripe has successfully processed your payment')
        cy.byTestid('Confetti')
            .should('be.visible')
    });
})

describe('Gremlins run', () => {
    let horde
    beforeEach(() => {
        return cy.visit('/success').then(() => {
            cy.window().then(pageWindow => {
                horde = createHorde({
                    species: [
                        species.clicker(),
                        species.typer(),
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