import jwtDecode from "jwt-decode"
const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")


const API_URL = `${ENV_BASE_URL}/api/student/booking/cancel`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("StudentBody/cancel-booking-body").then((data) => {
        payload_register = data
    })

})

describe('API-Cancel Booking Test', () => {

    // TEST
    it('Cancel - booking', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                
                booking_id: testCase.booking_id,
                cancellation_reason: testCase.cancellation_reason,
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN_ADMIN}`
                }
            }).then((response) => {
                console.log(response)
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach
        

    })  
})