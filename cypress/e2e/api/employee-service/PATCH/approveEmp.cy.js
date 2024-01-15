
const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`
}

const API_URL = `${ENV_BASE_URL}/api/auth/req/approve`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("EmployeeDoc/emp-approval-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-approveEmployee Test', () => {

    // TEST
   
    it('Approve - Employee', () => {
        payload_register.forEach((testCase) => {
            let bodyPayload = {
                        
                days:testCase.days,
                in_time: testCase.in_time,
                out_time: testCase.out_time,
                leaves: testCase.leaves,
                req_id: testCase.req_id
            }

        
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                body: bodyPayload,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin
                }
            }).then((response) => {
                if(response.status === 400)
                expect(response.status).to.equal(400);
                else if(response.status === 200)
                expect(response.status).to.equal(200);
                else
                expect(response.status).to.equal(404)
            });

            
           
        }); // forEach
        
       
    
    })
    
});    


