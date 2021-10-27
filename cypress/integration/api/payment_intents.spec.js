it('payment_intents api should return 200',{tags: '@api'},function () {
    cy.api({
        method:'POST',
        url: '/api/payment_intents',
        body: {
            amount: 250
        }
    },'Payment total')
        .then(body => {
            expect(body.status).to.eq(200)
            expect(body.statusText).to.eq('OK')
            expect(body.messages).to.be.instanceOf(Array)

            expect(body.requestHeaders.Connection).to.eq('keep-alive')
            expect(body.requestHeaders.accept).to.eq('*/*')


            expect(body.headers.connection).to.eq('keep-alive')
            expect(body.headers.date).to.exist
            expect(body.headers.etag).to.be.a('string')
        })
});