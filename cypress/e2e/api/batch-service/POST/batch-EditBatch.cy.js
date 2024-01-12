const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/batch/edit`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("BatchDoc/batch-editBatchBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Edit Batch', () => {

    // TEST
    it('Edit Batch', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                batch_id: testCase.batch_id,
                faculty_id:testCase.faculty_id,
                course_id: testCase.course_id,
                zone:testCase.zone,
                days_of_week:testCase.days_of_week,
                start_time:testCase.start_time,
                end_time:testCase.end_time,
                date:testCase.date,

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