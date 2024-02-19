const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_FACULTY_TOKEN = Cypress.env("TOKEN_EMP")

const AUTH_HEADER = {
    Faculty: `Bearer ${ENV_FACULTY_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/batch/add/session`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("AcademicsBody/AddSessionBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Add Session', () => {

    // TEST
    it('Add Session', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                batch_id:testCase.batch_id,
                number_of_session:testCase.number_of_session,
                comment:testCase.comment
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: AUTH_HEADER.Faculty
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