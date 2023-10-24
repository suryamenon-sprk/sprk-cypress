const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")


const API_URL = `${ENV_BASE_URL}/api/student/rbc`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("StudentBody/RBC-Body").then((data) => {
        payload_register = data
    })

})

describe('API-RBC - update  Test', () => {

    // TEST
    it('Cancel - booking', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                
                
                    course_group_id: testCase.course_group_id,
                    booking_id: testCase.booking_id,
                    total_fees: testCase.total_fees,
                    number_of_installments: testCase.number_of_installments,
                    payment_type: testCase.payment_type,
                    create_credit: testCase.create_credit,
                    rbc_reason: testCase.rbc_reason
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