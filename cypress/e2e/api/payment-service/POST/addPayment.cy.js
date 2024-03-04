const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")
const ENV_PAYMENT_ID = Cypress.env("PAYMENT_ID")

const API_URL = `${ENV_BASE_URL}/api/payment/add/`
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

    cy.fixture("PaymentBody/add-payment-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-addPayment Test', () => {

    

    // TEST
    it('Add - Payment', () => {

        ENV_PAYMENT_ID.forEach((paymentId) => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                payment_month: testCase.payment_month,
                paid_amount: testCase.paid_amount,
                due_amount: testCase.due_amount,
                booking_id: testCase.booking_id,
                payment_mode: testCase.payment_mode,
                transaction_id: testCase.transaction_id,
                cheque_number: testCase.cheque_number,
                cheque_date: testCase.cheque_date,
                bank_name: testCase.bank_name,
                branch_name: testCase.branch_name,
                authorization_code: testCase.authorization_code,
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: `${API_URL}${paymentId}`,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
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

    })

    }) })