// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
<<<<<<< Updated upstream

/*
    Customer command "enterCardDetails" to enter card card number, card expiration date, and card cvc
    number into stripe iframe
 */
Cypress.Commands.add('enterCardDetails', (cardDetails = null) => {
    const defaultCardDetails = {
        cardNumber: 4111111111111111,
        expDate: '1230',
        cvc: 319,
        ...cardDetails,
    }
    cy.log('Entering card details')
    cy.fillElementsInput('cardNumber', String(defaultCardDetails.cardNumber));
    cy.fillElementsInput('cardExpiry', defaultCardDetails.expDate); // MMYY
    cy.fillElementsInput('cardCvc', String(defaultCardDetails.cvc)).tab(); // to shift focus away from input
    cy.log('Card details have been entered!')
=======
import 'cypress-iframe'
/*
    Customer command "enterCardDetailsIniframe" to enter card card number, card expiration date, and card cvc
    number into stripe iframe
 */
Cypress.Commands.add('enterCardDetailsIniframe', ({cardNumber, expDate, cvc}) => {
    const iframeSelector = '[title="Secure card payment input frame"]'
    cy.frameLoaded(iframeSelector)
    cy.enter(iframeSelector).then(getBody => {
        getBody()
            .find('[name=cardnumber]')
            .type(cardNumber)
        getBody()
            .find('[name=exp-date]')
            .type(expDate)
        getBody()
            .find('[name=cvc]')
            .type(cvc)
    })
>>>>>>> Stashed changes
})

/*
    Custom command "enterCardUserDetails" to enter card user full name, email, address, city, state, and zip details
 */
<<<<<<< Updated upstream
Cypress.Commands.add('enterCardUserDetails', (userDetails = null) => {
    const defaultUserDetails = {
        fullName: 'John Wick',
        email: 'johnwick@wick.com',
        address: '777 Wicker Lane',
        city: 'Wickerson',
        state: 'WA',
        zip: 77777,
        ...userDetails
    }
    cy.log('Entering card user details.')

    const formField = {
        name: {
            selector: '[data-testid=name]',
            input: defaultUserDetails.fullName
        },
        email: {
            selector: '[data-testid=email]',
            input: defaultUserDetails.email
        },
        address: {
            selector: '[data-testid=address]',
            input: defaultUserDetails.address
        },
        city: {
            selector: '[data-testid=city]',
            input: defaultUserDetails.city
        },
        state: {
            selector: '[data-testid=state]',
            input: defaultUserDetails.state
        },
        zip: {
            selector: '[data-testid=zip]',
            input: String(defaultUserDetails.zip)
        }
    }
    for (const key in formField) {
        const field = formField[key]
        cy.get(field.selector, { log: false })
            .type(field.input, { log: false })
    }
=======
Cypress.Commands.add('enterCardUserDetails', ({fullName, email, address, city, state, zip}) => {
    cy.log('Entering card user details.')

    cy.get('[name=name]',{log:false})
        .type(fullName,{log:false})
    cy.get('[name=email]',{log:false})
        .type(email,{log:false})
    cy.get('[name=address]',{log:false})
        .type(address,{log:false})
    cy.get('[name=city]',{log:false})
        .type(city,{log:false})
    cy.get('[name=state]',{log:false})
        .type(state,{log:false})
    cy.get('[name=zip]',{log:false})
        .type(zip,{log:false})
>>>>>>> Stashed changes

    cy.log('Card user details have been entered!')
})
