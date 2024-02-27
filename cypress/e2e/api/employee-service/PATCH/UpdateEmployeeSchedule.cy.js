const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`
}

const API_URL = `${ENV_BASE_URL}/api/auth/emp/update/schedule`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("EmployeeDoc/UpdateEmpScheduleBody").then((data) => {
        payload_register = data
    })

})




// DESCRIPTION
describe('PATCH - Updating Time schedule of the Employee', () => {

    // TEST
    it('Updating Time schedule of the Employee', () => {
       
        payload_register.forEach((testCase) => {

            let bodyPayload = {
                days:testCase.days,
                in_time:testCase.in_time,
                out_time:testCase.out_time,
                leaves:testCase.leaves,
                req_id:testCase.req_id
            }  
                

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: AUTH_HEADER.Admin
                }
            }).then((response) => {
                    expect(response.status).to.equal(testCase.expected_status_code)
                
            }) // request

        }) // forEach
    
    })  
})