const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")
const leave_request = ["LVE245CAB35","LVE24632441","LVE2494DC66","LVE24E313DF"]
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
describe('PATCH - Leave approval', () =>{

    leave_request.forEach((lea_req) => {
        const API_URL = `${ENV_BASE_URL}/api/auth/leave/approve/${lea_req}`
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
                if(response === 200)
                expect(response.status).to.equal(200)
                else if(response === 400)
                expect(response.status).to.equal(400)
                cy.log(response.body)
            });
        }
    );


    });

});
