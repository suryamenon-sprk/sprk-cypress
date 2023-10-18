import jwtDecode from "jwt-decode"

const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/enquiry/follow`
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

    cy.fixture("follow-body").then((data) => {
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

describe('API-addFollow Test', () => {
    

    // TEST
    it('Create - FollowUp', 
        () => {
            
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    enquiry_id: testCase.enquiry_id,
                    follow_up_at: testCase.follow_up_at,
                    mode_of_follow_up: testCase.mode_of_follow_up,
                    comment: testCase.comment,
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
                    
                    if (enquiry_obj.status === "ENROLLED" )
                        expect(response.status).to.equal(400)
                    else
                        expect(response.status).to.equal(testCase.expected_status_code)
                    
                }) // request
            
            }) // forEach


        } // function
    ) // it
    
    
})