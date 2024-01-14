const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`
}

const API_URL = `${ENV_BASE_URL}/api/auth/req/decline/13`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

const API_URL_REQ = `${ENV_BASE_URL}/api/auth/req/13`
var req_obj = null
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
    if(response.status === 404){
        expect(response.status).to.equal(404)
    } else {
        expect(response.status).to.equal(200)
    }
    req_obj = response.body;
    });
});

// DESCRIPTION
describe('API-approveEmployee Test', () => {

    // TEST
    it('Approve - Employee', () => {

        
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin
                }
            }).then((response) => {
                if(response.status === 200)
                expect(response.status).to.equal(200);
                else if(response.status === 400)
                expect(response.status).to.equal(400);
                else
                expect(response.status).to.equal(404);

            });

            
           
        }); // forEach
        
       
    
    })
    
        


