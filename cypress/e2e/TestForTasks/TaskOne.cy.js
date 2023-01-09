describe('Test fors reqres', () => {
    it('PozitiveTest: Create User', () => {
        let mySet = new Set(['RUB',"EU"])

         mySet.forEach(info=>{
            cy.log(info);
        })
        mySet.add('PLN').add('USD')

        mySet.forEach(info=>{
            cy.log(info);
        })
        
        cy.log(mySet.has("USD"))
        mySet.delete("USD")
        cy.log(mySet.has("USD"))
    })
})