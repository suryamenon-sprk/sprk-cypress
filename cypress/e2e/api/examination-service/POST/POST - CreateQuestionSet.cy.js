const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const AUTH_HEADER = {
    ADMIN : `Bearer ${ENV_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/exam/create/set`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("ExaminationBody/CreateQuestionSet").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Create Question Set', () => {

    // TEST
    it('Create Question Set', () => {

        payload_register.forEach((testCase) => {

            const qsns = testCase.qsn && Array.isArray(testCase.qsn) ?
               testCase.qsn.map(qsn =>({
                id:qsn.id,
                marks:qsn.marks
               })) : [];

            let bodyPayload = {
                title:testCase.title,
                assessment:testCase.assessment,
                percentage:testCase.percentage,
                duration:testCase.duration,
                qsn:qsns,
                id:testCase.id,
                marks:testCase.marks
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization:AUTH_HEADER.ADMIN
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) 
})