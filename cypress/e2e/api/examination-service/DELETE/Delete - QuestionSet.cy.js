const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")

const API_URL = `${ENV_BASE_URL}/api/exam/set/fac11b97-d939-49fc-8b9f-e3d235882606`
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`,
    // Sales: `Bearer ${ENV_TOKEN_SALES}`
}

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}





//DESCRIPTION
describe('DELETE - Question from Question pool', () =>{

    it('Authorization Header - No Value',
        () => {
            cy.request({
                method: HttpMethod.DELETE,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                   
            expect(response.status).to.equal(404);
                    
            })
        }
    );




    it('Authorization Header - Invalid Value', 
        () => {
            cy.request({
                method: HttpMethod.DELETE,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    "Authorization": "HALO",
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                
                    expect(response.status).to.equal(403);
                
            })
        }
    );




    it('Authorization Header - superuser (TOKEN)',
        () => {
            cy.request({
                method: HttpMethod.DELETE,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
               
                    expect(response.status).to.equal(200);
                
            });
        }
    );
    



    // it('Authorization Header - sales (TOKEN)',
    //     () => {
    //         cy.request({
    //             method: HttpMethod.DELETE,
    //             url: API_URL,
    //             failOnStatusCode: false,
    //             headers: {
    //                 Authorization: AUTH_HEADER.Sales,
    //                 "ngrok-skip-browser-warning": true
    //             }
    //         }).then((response) => {
    //                 if(response.status === 200)
    //                 expect(response.status).to.equal(200);
    //                 else if(response.status === 404)
    //                 expect(response.status).to.equal(404);
    //                 else
    //                 expect(response.status).to.equal(403);
                
    //         });
    //     }
    // );



});
