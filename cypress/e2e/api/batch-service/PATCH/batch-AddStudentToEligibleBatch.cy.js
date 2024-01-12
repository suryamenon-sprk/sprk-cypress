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
var payload_register = null
before(() => {

    cy.fixture("BatchDoc/batch-addStudentToEligibleBatch").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('PATCH - Add Student To Eligible Batch', () => {

    // TEST
    batches.forEach((batch) => {
    const API_URL = `${ENV_BASE_URL}/api/batch/add/students/${batch}`
    it('Reschedule while Creation', () => {  
        payload_register.forEach(testCase=>{
            
            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
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

        }) //for each student id

        }) 

    }) //for each batches
})