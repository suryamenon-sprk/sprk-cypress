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

// const API_URL_EMP = `${ENV_BASE_URL}/api/auth/act`
// var activity_obj = null
//             beforeEach(() => {
//                 cy.request({
//                 method: HttpMethod.GET,
//                 url: API_URL_EMP,
//                 failOnStatusCode: false,
//                 headers: {
//                     Authorization: AUTH_HEADER.Admin,
//                     "ngrok-skip-browser-warning": true,
//                 },
//                 }).then((response) => {
//                 if(!response.body)
//                 expect(response.status).to.equal(204);
//                 else
//                 expect(response.status).to.equal(200);
//                 activity_obj = response.body;
//                 });
//             });





//DESCRIPTION
describe('GET - EMPLOYEES ACTIVITY BY ID', () =>{
    const base_URL = `${ENV_BASE_URL}/api/auth/act/`
    const startingNumber = 1;
    const endNumber = 10;

    for(let number = startingNumber; number <= endNumber; number++){
        let API_URL = `${base_URL}${number}`;
        console.log(API_URL); 


    it('Authorization Header - No Value',
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




    it('Authorization Header - Invalid Value', 
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
                expect(response.status).to.equal(403)
                cy.log(response.body.error)
            })
        }
    );




    it('Authorization Header - superuser (TOKEN)',
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
                if(response.status === 204)
                expect(response.status).to.equal(204)
                else 
                expect(response.status).to.equal(200)
                cy.log(response.body)
            });
        }
    );
    



    it('Authorization Header - sales (TOKEN)',
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
                expect(response.status).to.equal(403);
                cy.log(response.body);
            });
        }
    );

    }

});
