const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const AUTH_HEADER = {
    ADMIN : `Bearer ${ENV_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/exam/set/update`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("ExaminationBody/UpdateQuestionSet").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('PATCH - Update Question Set', () => {

    // TEST
    it('Update Question Set', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                id:testCase.id,
                title:testCase.title,
                assessment:testCase.assessment,
                percentage:testCase.percentage,
                duration:testCase.duration,
                qsn:testCase.qsn,
                id:testCase.id,
                marks:testCase.marks
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization:AUTH_HEADER.ADMIN
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) 
})