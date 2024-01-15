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
describe('PATCH - Resume Batch ', () =>{

    batches.forEach((batch) => {
        const API_URL = `${ENV_BASE_URL}/api/batch/resume/${batch}`
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
                if (response.status === 200) {
                } else if(response.status === 204) {
                } else {
                    expect(response.status).to.equal(400);
                }
            });
        }
    );


    });

});
