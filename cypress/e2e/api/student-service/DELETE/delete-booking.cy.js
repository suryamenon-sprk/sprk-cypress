const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")

const API_URL = `${ENV_BASE_URL}/api/student/delete/10`
const API_URL_ENQ = `${ENV_BASE_URL}/api/student/bookings/`
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


var enquiry_obj = null
beforeEach(() => {
    cy.request({
      method: HttpMethod.GET,
      url: API_URL_ENQ,
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
describe('DELETE - BOOKING (only admin)', () =>{

    it('Authorization Header - No Value',
        () => {
            let bodyPayload = [1];
            cy.request({
                method: HttpMethod.DELETE,
                url: API_URL,
                body: bodyPayload,
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
            let bodyPayload = [1];
            cy.request({
                method: HttpMethod.DELETE,
                url: API_URL,
                body: bodyPayload,
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


       
    
    


    it('Authorization Header - superuser (TOKEN)', () => {
        let bodyPayload = [3];
        cy.request({
          method: HttpMethod.DELETE,
          url: API_URL,
          body: bodyPayload,
          failOnStatusCode: false,
          headers: {
            Authorization: AUTH_HEADER.Admin,
            "ngrok-skip-browser-warning": true,
          },
        }).then((response) => {
          enquiry_obj = response.body;
          if(response.status === 400)
              expect(response.status).to.equal(400)
              else if(response.status === 404)
              expect(response.status).to.equal(404)
              else
              expect(response.status).to.equal(200)
        });
      });
    



    it('Authorization Header - sales (TOKEN)',
        () => {
            let bodyPayload = [1];
            cy.request({
                method: HttpMethod.DELETE,
                url: API_URL,
                body: bodyPayload,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Sales,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
              if(response.status === 400)
              expect(response.status).to.equal(400)
              else if(response.status === 404)
              expect(response.status).to.equal(404)
              else if(response.status === 403)
              expect(response.status).to.equal(403)
              else
              expect(response.status).to.equal(200)
            });
        });



});
