import spok from 'cy-spok'
it('_devPages api should return 200', {tags: 'api'},function () {
    cy.api({
        method: 'GET',
        url:'_next/static/development/_devPagesManifest.json',
        statusCode: 200,
        statusText: 'OK'
    }, 'Dev Pages')
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq('OK')
            expect(response.messages).to.be.instanceOf(Array)

            //validates response.body.pages
            expect(response.body.pages[0]).to.eq('/')
            expect(response.body.pages[1]).to.eq('/api/payment_intents')
            expect(response.body.pages[2]).to.eq('/success')

            //validates response.body schema with cy-spok
            cy.wrap(response.body)
                .should(spok({
                    pages: spok.array
                }))
        })
});