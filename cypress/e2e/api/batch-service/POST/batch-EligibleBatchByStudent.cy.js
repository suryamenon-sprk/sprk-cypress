const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/batch/eligible/batches`
const TOKEN = `${ENV_TOKEN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("BatchDoc/batch-eligibleBatchByStudentBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Eligible Batch By Student', () => {

    // TEST
    it('Eligible batch by student', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                course_id: testCase.course_id,
                students: testCase.students
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) })