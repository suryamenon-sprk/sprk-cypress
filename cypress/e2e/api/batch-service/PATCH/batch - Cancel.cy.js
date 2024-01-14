const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")
const TOKEN = ENV_TOKEN
const batches = ["BTH24JANPYTH1","BTH24JANMSQL1","BTH24JANHTM51","BTH24JANBTLY1","BTH24JANWORD2","BTH24JANAEXL1"]


const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

//FIXTURE
// var payload_register = null
// before(() => {

//     cy.fixture("BatchDoc/batch-rescheduleWhileCreationBody").then((data) => {
//         payload_register = data
//     })

// })

// DESCRIPTION
describe('PATCH - Cancel batch', () => {

    // TEST
    batches.forEach((batch) => {
        const API_URL = `${ENV_BASE_URL}/api/batch/approve/${batch}`
    it('Reschedule while Creation', () => {  

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                if (response.status === 200) {
                } else if(response.status === 204) {
                } else {
                    expect(response.status).to.equal(400);
                }
            }) // request

        }) // forEach

    }) })