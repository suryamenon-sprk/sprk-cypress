const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/exam/question/list/bycourse`
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`
}

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

let payload_register = null;

before(() => {
    cy.fixture("ExaminationBody/CourseIdToGetListOfQuestion.json").then((data) => {
        payload_register = data;
    });
});

describe('GET - List of Question By Course', () => {

    
    it('Authorization Header - No Value', () => {
        cy.request({
            method: HttpMethod.POST, // Changed method to POST
            url: API_URL,
            body: payload_register,
            failOnStatusCode: false,
            headers: {
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(404);
        });
    });

    it('Authorization Header - Invalid Value', () => {
        cy.request({
            method: HttpMethod.POST, // Changed method to POST
            url: API_URL,
            body: payload_register,
            failOnStatusCode: false,
            headers: {
                "Authorization": "HALO",
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(403);
        });
    });

    it('Authorization Header - superuser (TOKEN)', () => {
        cy.request({
            method: HttpMethod.POST, // Changed method to POST
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
    });
});

