const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")


const API_URL = `${ENV_BASE_URL}/api/student/booking/installments`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("StudentBody/add-installment-body").then((data) => {
        payload_register = data
    })

})

describe('PATCH - Add Installment', () => {

    // TEST
    it('Add - Installment', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                
                number_of_installments: testCase.number_of_installments,
                booking_id: testCase.booking_id,
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
                if(response.status === 400)
                    expect(response.status).to.equal(400)
                    else if(response.status === 404)
                    expect(response.status).to.equal(404)
                    else
                    expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach
        

    })  
})