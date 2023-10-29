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
const API_URL_EMP = `${ENV_BASE_URL}/api/auth/emp`
var enquiry_obj = null
            beforeEach(() => {
                cy.request({
                method: HttpMethod.GET,
                url: API_URL_EMP,
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
describe('GET - ALL EMPLOYEE (Only superuser)', () =>{
    const baseUrl = `${ENV_BASE_URL}/api/auth/emp/`;
    const startingNumber = 1;
    const endNumber = 10;

    for(let number = startingNumber; number <= endNumber; number++){
        let API_URL = `${baseUrl}${number}`;
        console.log(API_URL); 
    

    it(`Authorization Header - No Value ${number}`,
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(404)
            })
        }
    );




    it(`Authorization Header - Invalid Value ${number}`, 
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    "Authorization": "HALO",
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(400)
                cy.log(response.body.error)
            })
        }
    );




    it(`Authorization Header - superuser (TOKEN) ${number}`,
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                if( number == enquiry_obj.emp_id)
                expect(response.status).to.equal(200)
                else
                expect(response.status).to.equal(404)
                cy.log(response.body)
            });
        }
    );
    



    it(`Authorization Header - sales (TOKEN) ${number}`,
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Sales,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                if( number == enquiry_obj.emp_id)
                expect(response.status).to.equal(200)
                else
                expect(response.status).to.equal(403)
                cy.log(response.body);
            });
        }
    );

    }

});
