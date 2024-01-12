const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")
const batches = ['BTH24JANPYTH1','BTH24JANMSQL1','BTH24JANTGST1','BTH24JANTGST1','BTH24JANHTM51','BTH24JANBEXL1','BTH24JANBTLY1']

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
describe('GET - Student From Batch', () =>{

    batches.forEach(batch=> {
        const API_URL = `${ENV_BASE_URL}/api/batch/batchstudents/${batch}`
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
                if (response.status === 200) {
                } else if(response.status === 204) {
                } else {
                    expect(response.status).to.equal(400);
                }
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
                if (response.status === 200) {
                } else if(response.status === 204) {
                } else {
                    expect(response.status).to.equal(400);
                }
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
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Sales,
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
