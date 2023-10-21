const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/auth/register`
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

    cy.fixture("UserBody/register-users").then((data) => {
        payload_register = data
    })

})





// DESCRIPTION
describe('API-Register Test', () => {

    // TEST
    it('Register - user', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                "firstname": testCase.firstname,
                "middlename": testCase.middlename,
                "lastname": testCase.lastname,
                "username": testCase.username,
                "email": testCase.email,
                "password": testCase.password,
                "org_id": testCase.org_id
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

    }) // it



})
