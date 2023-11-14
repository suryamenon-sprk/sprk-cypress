const ENV_BASE_URL = Cypress.env("BASE_URL")

const API_URL = `${ENV_BASE_URL}/api/auth/login`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


// FIXTURE
var payload_superuser = null
before(() => {

    cy.fixture("UserBody/login-superuser").then((data) => {
        payload_superuser = data
    })

})





// DESCRIPTION
describe('API-Login Test', () => {

    
    // TEST
    it('Login - superuser', () => {

        // LOOP
        payload_superuser.forEach((testCase) => {

            cy.log(testCase.description)

            let bodyPayload = {
                email: testCase.email,
                password: testCase.password,
                hcaptcha_response:testCase.hcaptcha_response
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach
    
    }); // it



})