
const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")


const API_URL = `${ENV_BASE_URL}/api/batch/add/student`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const TOKEN_SALES = `${ENV_TOKEN_SALES}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("BatchDoc/batch-addStudentInBatch").then((data) => {
        payload_register = data
    })

})

describe('API-add Student in batch', () => {

    // TEST
    it('Add Students in batch', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                batch_id:testCase.batch_id,
                students_id:testCase.students_id
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN_ADMIN}`
                }
            }).then((response) => {
                console.log(response)
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach
    

    }) }) 
