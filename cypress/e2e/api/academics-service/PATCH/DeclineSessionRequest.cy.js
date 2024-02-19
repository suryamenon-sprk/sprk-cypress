const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_ADMIN_TOKEN = Cypress.env("TOKEN_ADMIN")
const ENV_SESSION_REQ = Cypress.env("SESSION_REQUEST")

const AUTH_HEADER = {
    Faculty: `Bearer ${ENV_ADMIN_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/batch/session-request/decline/`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



// DESCRIPTION
describe('PATCH - Decline Session Request', () => {

    // TEST
    it('Decline Session Request', () => {

        ENV_SESSION_REQ.forEach((sessionReqId) => {


            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: `${API_URL}${sessionReqId}`,
                failOnStatusCode: false,
                headers: {
                    Authorization: AUTH_HEADER.Faculty
                }
            }).then((response) => {
                if(response.status === 400)
                expect(response.status).to.equal(400)
                else if(response.status === 404)
                expect(response.status).to.equal(404)
                else
                expect(response.status).to.equal(200)
            }) // request

        }) // forEach

    }) })