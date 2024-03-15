const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_SET_ID = Cypress.env("SET_ID")


const API_URL = `${ENV_BASE_URL}/api/exam/question/list/bycourse`
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

var payload_register = null
before(() => {

    cy.fixture("ExaminationBody/CourseIdToGetListOfQuestion").then((data) => {
        payload_register = data
    })

})


//DESCRIPTION
describe('GET - List of Question By Course', () =>{


   
    it('Authorization Header - No Value',
        () => {
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                body: payload_register,
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
                method: HttpMethod.POST,
                url: API_URL,
                body: payload_register,
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
                method: HttpMethod.POST,
                url: API_URL,
                body: payload_register,
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
    


   

});


