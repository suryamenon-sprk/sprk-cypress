import jwtDecode from "jwt-decode"
const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")


const API_URL = `${ENV_BASE_URL}/api/enquiry/transfer`
const API_URL_ENQ = `${ENV_BASE_URL}/api/enquiry/1`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const TOKEN_SALES = `${ENV_TOKEN_SALES}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("EnquiryBody/transfer-body").then((data) => {
        payload_register = data
    })

})

describe('API-transferEnquiry Test', () => {

    // TEST
    it('Transfer - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                enquiry_id:testCase.enquiry_id,
                user_id:testCase.user_id,
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
        it('Transfer - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                enquiry_id: testCase.enquiry_id,
                discard_reason: testCase.discard_reason
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN_SALES}`
                }
            }) // request

        })

    }) }) 
})