const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/student/preview/add`
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

describe('API-Add - Installments Test', () => {
    

    // TEST
    it('Add - installment', 
        () => {
            
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    booking_id:testCase.booking_id,
                    number_of_installments:testCase.number_of_installments,
                    payment_term:testCase.payment_term
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
                    if (response.status === 400){
                    expect(response.status).to.equal(400)
                    } else{
                        expect(response.status).to.equal(400)
                    }
                    
                }) // request
            
            }) // forEach


        } // function
    ) // it
    
    
})