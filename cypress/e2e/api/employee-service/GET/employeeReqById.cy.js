const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")
const ENV_REQUEST_ID = Cypress.env("REQUEST_ID")


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

const API_URL = `${ENV_BASE_URL}/api/auth/req/`





//DESCRIPTION
describe('GET - EMPLOYEES ACTIVITY BY ID', () =>{

    ENV_REQUEST_ID.forEach((reqId) => {


    it('Authorization Header - No Value',
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: `${API_URL}${reqId}`,
                failOnStatusCode: false,
                headers: {
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(404)
            })
        }
    );




    it('Authorization Header - Invalid Value', 
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: `${API_URL}${reqId}`,
                failOnStatusCode: false,
                headers: {
                    "Authorization": "HALO",
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(403)
                cy.log(response.body.error)
            })
        }
    );




    it('Authorization Header - superuser (TOKEN)',
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: `${API_URL}${reqId}`,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
               if(response.status === 200)
               expect(response.status).to.equal(200);
                else
                expect(response.status).to.equal(400);
            });
        });
    



    it('Authorization Header - sales (TOKEN)',
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: `${API_URL}${reqId}`,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Sales,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(403);
                cy.log(response.body);
            });
        });

    });

    });


