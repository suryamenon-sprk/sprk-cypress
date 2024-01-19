const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")
const TOKEN = ENV_TOKEN
const API_URL = `${ENV_BASE_URL}/api/batch/update`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("BatchDoc/batch-updateBatchBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('PATCH - Update Batch', () => {

    // TEST
    it('Edit Batch', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                batch_id:testCase.batch_id,
                faculty_id:testCase.faculty_id,
                course_id:testCase.course_id,
                zone:testCase.zone,
                days_of_week:testCase.days_of_week,
                start_time:testCase.start_time,
                end_time:testCase.end_time,
                sessions:testCase.sessions,
                start:testCase.start,
                end:testCase.end

            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                if(response.status === 400)
                expect(response.status).to.equal(400)
                else if(response.status === 404)
                expect(response.status).to.equal(404)
                else
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) })