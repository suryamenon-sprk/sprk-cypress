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
const baseUrlEmp = `${ENV_BASE_URL}/api/auth/emp/`
const start = 1;
const end = 5;

for(let number = start; number <= end; number++){
    let API_URL_EMP = `${baseUrlEmp}${number}`;
    console.log(API_URL_EMP); 

var emp_obj = null
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
                emp_obj = response.body;
                if(emp_obj.emp_id != number)
                expect(response.status).to.equal(404);
                else
                expect(response.status).to.equal(200);
                });
            });

        }
//DESCRIPTION
describe('GET - IDENTIFICATION DOCUMENT (Only superuser)', () =>{
    const baseUrl = `${ENV_BASE_URL}/api/auth/doc/off/`;
    const startingNumber = 1;
    const endNumber = 5;

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
                if(emp_obj.doc_salary_slip === false)
                expect(response.status).to.equal(404)
                else if(emp_obj.emp_id === number)
                expect(response.status).to.equal(200)
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
                expect(response.status).to.equal(403)
                cy.log(response.body)
            });
        }
    );

    }

});
