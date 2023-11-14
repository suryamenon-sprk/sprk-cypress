const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`
}

const API_URL = `${ENV_BASE_URL}/api/auth/emp/add`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("EmployeeDoc/emp-body").then((data) => {
        payload_register = data
    })

})


const API_URL_REQ = `${ENV_BASE_URL}/api/auth/emp/req`
var emp_obj = null
beforeEach(() => {
    cy.request({
    method: HttpMethod.GET,
    url: API_URL_REQ,
    failOnStatusCode: false,
    headers: {
        Authorization: AUTH_HEADER.Admin,
        "ngrok-skip-browser-warning": true,
    },
    }).then((response) => {
    if(!response.body)
    expect(response.status).to.equal(204);
    else
    expect(response.status).to.equal(200);
    emp_obj = response.body;
    });
});


// DESCRIPTION
describe('API-addEmployee Test', () => {

    // TEST
    it('Add - Employee', () => {
       
        payload_register.forEach((testCase) => {

            let bodyPayload = {
                firstname: testCase.firstname,
                lastname: testCase.lastname,
                phone: testCase.phone,
                email: testCase.email,
                authorities:testCase.authorities,
                joining_date: testCase.joining_date
            }  
                

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: AUTH_HEADER.Admin
                }
            }).then((response) => {

                if (emp_obj.data.some((req) => req.email === testCase.email))  
                    expect(response.status).to.equal(400)
                else
                    expect(response.status).to.equal(testCase.expected_status_code)
                
            }) // request

        }) // forEach
    
    })  
})