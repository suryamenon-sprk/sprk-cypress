const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")

const API_URL = `${ENV_BASE_URL}/api/student/bookings/regi/55`
const API_URL_BID = `${ENV_BASE_URL}/api/student/bookings/s/55`
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
      url: API_URL_BID,
      failOnStatusCode: false,
      headers: {
        Authorization: [
            AUTH_HEADER.Admin,
            AUTH_HEADER.Sales
      ],
        "ngrok-skip-browser-warning": true,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      enquiry_obj = response.body;
    });
  });




//DESCRIPTION
describe('GET - REGISTRATION - UNUSED (AllUsers)', () =>{

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
                expect(response.status).to.equal(400)
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
                enquiry_obj = response.body;
                if (enquiry_obj.registration_amount === null) {
                  expect(response.status).to.equal(204);
                } else {
                  expect(response.status).to.equal(204);
                }
                // expect(response.status).to.equal(200)
                // cy.log(response.body)
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
                // expect(response.status).to.equal(200);
                enquiry_obj = response.body;
                if (enquiry_obj.registration_amount === null) {
                  expect(response.status).to.equal(204);
                } else {
                  expect(response.status).to.equal(204);
                }
                cy.log(response.body);
            });
        }
    );



});
