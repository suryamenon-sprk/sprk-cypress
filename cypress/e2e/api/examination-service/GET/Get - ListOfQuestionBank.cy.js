const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/exam/question/list`
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
describe('GET - List of Question Bank', () =>{

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
                   
            expect(response.status).to.equal(404);
                    
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
                
                    expect(response.status).to.equal(403);
                
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
               
                    expect(response.status).to.equal(200);
                
            });
        }
    );
    



    // it('Authorization Header - sales (TOKEN)',
    //     () => {
    //         cy.request({
    //             method: HttpMethod.GET,
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
