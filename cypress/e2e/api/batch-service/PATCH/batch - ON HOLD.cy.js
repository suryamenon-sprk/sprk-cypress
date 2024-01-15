const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")
const batches = ["BTH24JANPYTH1","BTH24JANMSQL1","BTH24JANHTM51","BTH24JANBTLY1","BTH24JANWORD2","BTH24JANAEXL1"]
const API_URL = `${ENV_BASE_URL}/api/batch/hold/BTH24JANTABL1`
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
describe('PATCH - ON HOLD ', () =>{

    batches.forEach((batch) => {
        const API_URL = `${ENV_BASE_URL}/api/batch/hold/${batch}`
    it('Authorization Header - superuser (TOKEN)',
        () => {
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                cy.log(response.body)
            });
        }
    );


    });

});
