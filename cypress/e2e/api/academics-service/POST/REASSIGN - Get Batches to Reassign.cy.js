const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_EMP = Cypress.env("TOKEN_EMP")
// const ENV_TOKEN_BATCH = Cypress.env("BATCH_IDS")

const API_URL = `${ENV_BASE_URL}/api/batch/reassign`
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

//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("AcademicsBody/RequestToReassignBatchesBody").then((data) => {
        payload_register = data
    })

})


// DESCRIPTION
describe('GET - Attendance Module Wise', () => {

   

        it(`Authorization Header - No Value`,() => {
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    batch_id:testCase.batch_id,
                    stud_id: testCase.stud_id,
                    mod_id:testCase.mod_id
                    
                }
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                body:bodyPayload,
                failOnStatusCode: false,
                headers: {
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(404);
            });
        });
    });

        it(`Authorization Header - Invalid Value`, () => {
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    batch_id:testCase.batch_id,
                    stud_id: testCase.stud_id,
                    mod_id:testCase.mod_id
                    
                }
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                body:bodyPayload,
                failOnStatusCode: false,
                headers: {
                    "Authorization": "HALO",
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(403);
            });
        });
    });
        it(`Authorization Header - superuser (TOKEN)`, () => {
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    batch_id:testCase.batch_id,
                    stud_id: testCase.stud_id,
                    mod_id:testCase.mod_id
                    
                }
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                body:bodyPayload,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Admin,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                if (response.status === 200)
                    expect(response.status).to.equal(200);
                else if (response === 204)
                    expect(response.status).to.equal(204);
                else
                    expect(response.status).to.equal(400);
            });
        });
    });

        it(`Authorization Header - Faculty (TOKEN)`, () => {
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    batch_id:testCase.batch_id,
                    stud_id: testCase.stud_id,
                    mod_id:testCase.mod_id
                    
                }
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                body:bodyPayload,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Faculty,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                if (response.status === 200)
                    expect(response.status).to.equal(200);
                else if (response === 204)
                    expect(response.status).to.equal(204);
                else
                    expect(response.status).to.equal(400);
            });
        });

    });
});

