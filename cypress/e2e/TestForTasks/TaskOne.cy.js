const { Chance } = require("chance")
import { isSuperSet, intersection, union, difference } from "../Utils/Helper";
describe('Test', () => {
    it('CollectionOne', () => {
        let mySet = new Set(['RUB', "EU"])
        const chance = new Chance();

        mySet.forEach(info => {
            cy.log(info);
        })
        mySet.add('PLN').add('USD')

        mySet.forEach(info => {
            cy.log(info);
        })

        cy.log(mySet.has("USD"))
        mySet.delete("USD")
        cy.log(mySet.has("USD"))

        let arr = [...mySet];
        chance.pickone(arr)
        cy.log(arr)

    })
})

describe('Test', () => {
    it('CollectionOne', () => {

        var setA = new Set([1, 2, 3, 4]),
            setB = new Set([2, 3]),
            setC = new Set([3, 4, 5, 6]);

        console.log(isSuperSet(setA, setB));
        console.log(union(setA, setC));
        console.log(intersection(setA, setC));
        console.log(difference(setA, setC));
    })
})