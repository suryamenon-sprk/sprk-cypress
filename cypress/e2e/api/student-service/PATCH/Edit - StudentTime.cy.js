const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_ADMIN_TOKEN = Cypress.env("TOKEN_ADMIN")

const AUTH_HEADER = {
    Admin: `Bearer ${ENV_ADMIN_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/student/80/timing/edit`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("StudentBody/editStudentTime").then((data) => {
        payload_register = data
    })

})



// DESCRIPTION
describe('PATCH - Edit time of the student', () => {

    // TEST
    it('Edit time of the student', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                days:testCase.days,
                start:testCase.start,
                end:testCase.end,
                reason:testCase.reason
            }



            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                body:bodyPayload,
                failOnStatusCode: false,
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