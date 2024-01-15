const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/batch/preview`
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

    cy.fixture("BatchDoc/batch-previewSessionBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Preview Session Date And Time', () => {

    // TEST
    it('Create - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                faculty_id: testCase.faculty_id,
                course_id: testCase.course_id,
                days_of_week:testCase.days_of_week,
                start_time:testCase.start_time,
                end_time:testCase.end_time,
                date:testCase.date,
                number_of_days: testCase.number_of_days,
                zone: testCase.zone
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