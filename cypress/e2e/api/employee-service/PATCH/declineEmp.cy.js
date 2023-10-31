const ENV_BASE_URL = Cypress.env("BASE_URL")
let TOKEN = null


const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

before(() => {
// TOKEN
    cy.request({
        method: HttpMethod.POST, 
        url: `${ENV_BASE_URL}/api/auth/login`, 
        failOnStatusCode: false,
        body: {
            email: "kavita@sprktechnologies.in",
            password: 'Kavita@123',
        },
    }).then((response) => {
        expect(response.status).to.equal(200); 
        TOKEN = response.body.token; 
    });

})

const API_URL_EMP_REQ = `${ENV_BASE_URL}/api/auth/emp/req`
var emp_obj = null
            beforeEach(() => {
                cy.request({
                method: HttpMethod.GET,
                url: API_URL_EMP_REQ,
                failOnStatusCode: false,
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "ngrok-skip-browser-warning": true,
                },
                }).then((response) => {
                expect(response.status).to.equal(200);
                emp_obj = response.body;
                });
            });

// DESCRIPTION
describe('API-declineEmployee Test', () => {
    const baseUrl = `${ENV_BASE_URL}/api/auth/decline/emp/req`;
    const startingNumber = 1;
    const endNumber = 5;

    for(let number = startingNumber; number <= endNumber; number++){
        let API_URL = `${baseUrl}/${number}`;
        console.log(API_URL); 
    // TEST
    it(`Decline - Employee ${number}`, () => {

        
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {

                if (emp_obj[number-1].emp_id != number)
                    expect(response.status).to.equal(403);
                else {
                    if(emp_obj[number-1].request_status === "PENDING")
                        expect(response.status).to.equal(200);

                    if(emp_obj[number-1].request_status === "DECLINE")
                        expect(response.status).to.equal(200);

                    if(emp_obj[number-1].request_status === "APPROVED")
                        expect(response.status).to.equal(400);
                }

                
            });

        }); // forEach
        
    }
    
    })
    
        


