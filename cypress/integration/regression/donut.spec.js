describe('Donut', {tags: 'regression'},function () {
    beforeEach(() => {
        cy.visit('/')
    })

    it('+ should increment amount', function () {
        cy.get('input[value]',{log:false})
            .then(donutCount => {

                //sets initial value of donut count
                const initialValue = donutCount.val()
                cy.log('Initial donut count is ' + initialValue)

                //increment amount
                cy.contains('span','+',{log:false})
                    .click({log:false})

                //validate new count is greater
                cy.get('input[value]',{log:false})
                    .then(newDonutCount => {
                        expect(parseInt(newDonutCount.val())).to.be.gt(parseInt(initialValue))
                    })
            })
    });

    it('- should not decrement below 1', function () {
        cy.get('input[value]',{log:false})
            .then(donutCount => {

                //sets initial value of donut count
                const initialValue = donutCount.val()
                cy.log('Initial donut count is ' + initialValue)

                //increment amount
                cy.contains('span','–',{log:false})
                    .click({log:false})

                //validate new count is greater
                cy.get('input[value]',{log:false})
                    .then(newDonutCount => {
                        expect(parseInt(newDonutCount.val())).to.be.eq(parseInt(initialValue))
                    })
            })
    });

    it('+ should increment price', function () {
        cy.contains('button','Pay')
            .then(price => {

                const initialPriceText = price.text()
                const initialPrice = initialPriceText.substring(initialPriceText.indexOf('$')+1)

                //increment amount
                cy.contains('span','+',{log:false})
                    .click({log:false})

                //validate new price is greater
                cy.contains('button','Pay')
                    .then(price => {
                        const newPriceText = price.text()
                        const newPrice = newPriceText.substring(newPriceText.indexOf('$')+1)
                        expect(parseFloat(newPrice)).to.be.gt(parseFloat(initialPrice))
                    })
            })
    });
});