import jwtDecode from "jwt-decode"

const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/enquiry/avail`
const API_URL_ENQ = `${ENV_BASE_URL}/api/enquiry/1`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



var payload_register = null
var enquiry_obj = null
before(() => {

    cy.fixture("existing-enquiry").then((data) => {
        payload_register = data
    })

    cy.request({
        method: HttpMethod.GET,
        url: API_URL_ENQ,
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${TOKEN_ADMIN}`,
            "ngrok-skip-browser-warning": true
        }
    }).then((response) => {
        console.log(response)
        expect(response.status).to.equal(200)
        enquiry_obj = response.body;

    });

})

describe('API-existingEnquiry Test', () => {
    

    // TEST
    it('Enquiry - Exist', 
        () => {
            
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    primary_mobile: testCase.primary_mobile,
                    primary_email: testCase.primary_email,
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
                    
                    if (testCase.primary_mobile === enquiry_obj.primary_mobile ||testCase.primary_email === enquiry_obj.primary_email)
                        expect(response.status).to.equal(400)
                    else
                        expect(response.status).to.equal(testCase.expected_status_code)
                    
                }) // request
            
            }) // forEach


        } // function
    ) // it
    
    
})