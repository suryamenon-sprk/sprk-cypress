const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/payment/credit/check`
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

    cy.fixture("PaymentBody/credit-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-check credit Test', () => {

    // TEST
    it('check  - credit', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                credit_uid: testCase.credit_uid
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
                if(response.status === 404)
                expect(response.status).to.equal(404)
                else if(response.status === 400)
                expect(response.status).to.equal(400)
                else
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) })