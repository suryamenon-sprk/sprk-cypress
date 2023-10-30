const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/auth/emp/add`
const API_URL_REQ = `${ENV_BASE_URL}/api/auth/emp/req/27`
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

    cy.fixture("EmployeeDoc/emp-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-addEmployee Test', () => {

    // TEST
    it('Add - Employee', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                firstname: testCase.firstname,
                lastname: testCase.lastname,
                phone: testCase.phone,
                email: testCase.email,
                authorities:testCase.authorities
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