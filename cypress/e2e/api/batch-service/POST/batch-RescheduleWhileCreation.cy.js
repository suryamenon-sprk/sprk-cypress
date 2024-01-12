const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")
const TOKEN = ENV_TOKEN
const API_URL = `${ENV_BASE_URL}/api/batch/reschedule`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("BatchDoc/batch-rescheduleWhileCreationBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Reschedule While Creation', () => {

    // TEST
    it('Reschedule while Creation', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                faculty_id: testCase.faculty_id,
                course_id: testCase.course_id,
                days_of_week:testCase.days_of_week,
                number_of_days:testCase.number_of_days,
                start_time:testCase.start_time,
                end_time:testCase.end_time,
                date:testCase.date,
                number_of_days: testCase.number_of_days,
                zone: testCase.zone,
                session_requests:testCase.session_requests,
                start:testCase.start,
                end:testCase.end

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