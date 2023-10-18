const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/enquiry/filter`
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

    cy.fixture("filter-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-addEnquiry Test', () => {

    // TEST
    it('Create - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                enquiry_id: testCase.enquiry_id,
                follow_up_at: testCase.follow_up_at,
                mode_of_follow_up: testCase.mode_of_follow_up,
                comment: testCase.comment,
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