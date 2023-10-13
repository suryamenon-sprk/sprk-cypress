// MEMBERS
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}
const BASE_URL = Cypress.env("BASE_URL")
const TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const TOKEN_SALES = Cypress.env("TOKEN_SALES")



// DESCRIBE
describe("GET - Users-All (ADMIN)", () => {


    it('WITHOUT AUTH HEADER', () => {
        cy.request({
            method: HttpMethod.GET,
            url: BASE_URL + "/api/auth/users",
            failOnStatusCode: false,
            headers: {
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(404)

            // let responseBody = response.body;

            // if ('error' in responseBody)
            // if (responseBody.hasOwnProperty('error'))
            //     cy.log(responseBody.error)
            // else
            //     cy.log(responseBody)

        })
    });




    it('Random shit inside Authorization Header', () => {
        cy.request({
            method: HttpMethod.GET,
            url: BASE_URL + "/api/auth/users",
            failOnStatusCode: false,
            headers: {
                "Authorization": "HALO",
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(400)
            cy.log(response.body.error)
        })
    });



    it('Token superuser - Authorization Header', () => {
        cy.request({
            method: HttpMethod.GET, // Use the HttpMethod from Helper
            url: BASE_URL + "/api/auth/users",
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${TOKEN_ADMIN}`,
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    });



    it(' Token-Sales - Sales should not have access to all users data', () => {
        cy.request({
            method: HttpMethod.GET, // Use the HttpMethod from Helper
            url: BASE_URL + "/api/auth/users",
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${TOKEN_SALES}`,
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(403);
            cy.log(response.body);
        });
    });



})