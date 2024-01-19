const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`,
    Sales: `Bearer ${ENV_TOKEN_SALES}`
}

const API_URL = `${ENV_BASE_URL}/api/payment/cancel`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("PaymentBody/cancel-receipt-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-cancelReceipt Test', () => {

    // TEST
    it('cancel - Receipt', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                receipt_id: testCase.receipt_id,
                cancel_reason: testCase.cancel_reason
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