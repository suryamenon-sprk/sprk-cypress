const ENV_BASE_URL = Cypress.env("BASE_URL")
let TOKEN = null

const API_URL = `${ENV_BASE_URL}/api/auth/approve/emp/req/25`
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


// DESCRIPTION
describe('API-approveEmployee Test', () => {

    // TEST
    it('Approve - Employee', () => {

        
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
            });

            
           
        }); // forEach
        
       
    
    })
    
        


