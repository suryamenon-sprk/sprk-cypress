const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_EMP = Cypress.env("TOKEN_EMP")

const API_URL = `${ENV_BASE_URL}/api/batch/faculty/batches`
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`,
    Faculty: `Bearer ${ENV_TOKEN_EMP}`
}

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}





//DESCRIPTION
describe('GET - All Batches Of Faculty', () =>{

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
                    if(response.status === 200)
                    expect(response.status).to.equal(200)
                    else
                    expect(response.status).to.equal(204);
                
            });
        }
    );
    



    it('Authorization Header - Faculty (TOKEN)',
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Faculty,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
               
                if(response.status === 200)
                expect(response.status).to.equal(200)
                else
                expect(response.status).to.equal(204);
                
            });
        }
    );



});