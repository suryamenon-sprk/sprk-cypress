const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")

const FACULTY_ID = Cypress.env("FACULTY_ID") 

const API_URL = `${ENV_BASE_URL}/api/batch/get/faculty/`

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





//DESCRIPTION
describe('GET - faculty details', () =>{
   

    FACULTY_ID.forEach(faculty=>{
       
    it('Authorization Header - No Value',
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: `${API_URL}details?facultyUid=${faculty}&start=null&end=null`,
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
                url: `${API_URL}details?facultyUid=${faculty}&start=null&end=null`,
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
                url: `${API_URL}details?facultyUid=${faculty}&start=null&end=null`,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                if (response.status === 200) {
                } else if(response.status === 204) {
                } else {
                    expect(response.status).to.equal(400);
                }
            });
        }
    );
    



    it('Authorization Header - sales (TOKEN)',
        () => {
            cy.request({
                method: HttpMethod.GET,
                url: `${API_URL}details?facultyUid=${faculty}&start=null&end=null`,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Sales,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                    if(response.status === 200)
                    expect(response.status).to.equal(200);
                    else
                    expect(response.status).to.equal(403);
                
            });
        }
    );

    

});
});
