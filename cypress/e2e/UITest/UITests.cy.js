describe('Test fors reqres', () => {
    it('PozitiveTest: Create User', () => {
cy.visit('https://www.amazon.com/')    
cy.get('input[name="field-keywords"]').type(`iphone 13{enter}`)
cy.get('span[class="a-size-medium a-color-base a-text-normal"]').should('exist')
        })
    })