const { Chance } = require("chance")

describe('Test fors reqres', () => {
    beforeEach(() => {
    })

    it('PozitiveTest: Create User', () => {
        cy.fixture('TestData').then(TestData => {
            cy.request('POST', '/api/users', TestData).then(response => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('name', TestData.name)
                expect(response.body).to.have.property('job', TestData.job)

            })
        })
    })

    it('Negative: Post Request', () => {

        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false, body:
            {
                "email": "snakedrumm@gmail.comm"
            }
        }).then(response => {
            expect(response.status).to.eq(400);

        })
    })
})

let testingData = [
    {
        description: "MaxValues",
        requestData: {
            name: Chance().string({ length: 100 }),
            job: Chance().string({ length: 100 })
        }
    },

    {
        description: "MinValue",
        requestData: {
            name: Chance().string({ length: 100 }),
            job: Chance().string({ length: 100 })
        }
    }
]

testingData.forEach(({ description, requestData }) => {
    it(`PozitiveTest: Create User ${description}`, () => {

        cy.request('POST', '/api/users', requestData).then(response => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', requestData.name)
            expect(response.body).to.have.property('job', requestData.job)

        })
    })
})