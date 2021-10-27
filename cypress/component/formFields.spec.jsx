import BillingDetailsFields from "../../components/prebuilt/BillingDetailsFields";
import { mount } from '@cypress/react'


before(() => {

})

it('should render', function () {
    mount(BillingDetailsFields)
    cy.get('[data-cy=name]').should('be.visible')
});