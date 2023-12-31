const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/student/preview`
// const API_URL_ENQ = `${ENV_BASE_URL}/api/enquiry/1`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



var payload_register = null

before(() => {

    cy.fixture("StudentBody/preview-installment").then((data) => {
        payload_register = data
    })

})

describe('API-previewInstallment Test', () => {
    

    // TEST
    it('Preview - installment', 
        () => {
            
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    number_of_installments: testCase.number_of_installments,
                    total_fees: testCase.total_fees
                }

                // REQUEST
                cy.request({
                    method: HttpMethod.POST,
                    url: API_URL,
                    failOnStatusCode: false,
                    body: bodyPayload,
                    headers: {
                        Authorization: `Bearer ${TOKEN_ADMIN}`
                    }
                }).then((response) => {
                    
                    expect(response.status).to.equal(testCase.expected_status_code)
                    
                }) // request
            
            }) // forEach


        } // function
    ) // it
    
    
})