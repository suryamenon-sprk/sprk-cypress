const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")



const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`,
    Sales: `Bearer ${ENV_TOKEN_SALES}`
}
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}
const API_URL_CREDITS = `${ENV_BASE_URL}/api/payment/credit/1`
const API_URL = `${ENV_BASE_URL}/api/payment/credit/print/1`;

var enquiry_obj = null
            beforeEach(() => {
                cy.request({
                method: HttpMethod.GET,
                url: API_URL_CREDITS,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true,
                },
                }).then((response) => {
                expect(response.status).to.equal(200);
                enquiry_obj = response.body;
                });
            });




//DESCRIPTION
describe('POST - PRINT CREDIT (AllUsers)', () =>{

        it('Print - Credit Admin', () => {
    
                // REQUEST
                cy.request({
                    method: HttpMethod.POST,
                    url: API_URL,
                    failOnStatusCode: false,
                    headers: {
                        Authorization: AUTH_HEADER.Admin
                    }
                }).then((response) => {
                    if (enquiry_obj.credit_id === null) {
                        expect(response.status).to.equal(404);
                    } else {
                        expect(response.status).to.equal(201);
                    }
                    // expect(response.status).to.equal(200)
                }) // request
    
    
        }) 
        
        it('Print - Credit Sales', () => {
    
            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Sales
                }
            }).then((response) => {
                if (enquiry_obj.credit_id === null) {
                    expect(response.status).to.equal(404);
                } else {
                    expect(response.status).to.equal(201);
                }
                // expect(response.status).to.equal(200)
            }) // request


    }) 
    
    
    })


