const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_ADMIN_TOKEN = Cypress.env("TOKEN_ADMIN")

const AUTH_HEADER = {
    Faculty: `Bearer ${ENV_ADMIN_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/batch/notify/Reassign`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("AcademicsBody/NotifyReassignBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Notify Reassign batch to student', () => {

    // TEST
    it('Add Session', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                student_id:testCase.student_id,
                module_id:testCase.module_id,
                course_id:testCase.course_id
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: AUTH_HEADER.Faculty
                }
            }).then((response) => {
                if(response.status === 400)
                expect(response.status).to.equal(400)
                else if(response.status === 404)
                expect(response.status).to.equal(404)
                else
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) })