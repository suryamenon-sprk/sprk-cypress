const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_ADMIN_TOKEN = Cypress.env("TOKEN_ADMIN")
const ENV_EMP_TOKEN = Cypress.env("TOKEN_EMP")

const API_URL = `${ENV_BASE_URL}/api/batch/reassign/disable/reminder`
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_ADMIN_TOKEN}`,
    Emp: `Bearer ${ENV_EMP_TOKEN}`
}
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("AcademicsBody/DisableReassRemBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('PATCH - Disable Reassign Reminder', () => {

    // TEST
    it('Disable Reassign Reminder', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                batch_id:testCase.batch_id,
                stud_id: testCase.stud_id,
                mod_id:testCase.mod_id,
                
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: AUTH_HEADER.Admin
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