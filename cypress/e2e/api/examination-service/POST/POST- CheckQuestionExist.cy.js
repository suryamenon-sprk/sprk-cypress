const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const AUTH_HEADER = {
    ADMIN : `Bearer ${ENV_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/exam/check/question`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("ExaminationBody/CheckQuestionExistBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('POST - Create Question Set', () => {

    // TEST
    it('Create Question Set', () => {

        payload_register.forEach((testCase) => {

            const options = testCase.options && Array.isArray(testCase.options) ?
            testCase.options.map(option => ({
                option: option.option,
                ans: option.ans,
                id: option.id
            })) :
            [];


            let bodyPayload = {
                course: testCase.course,
                    question_type: testCase.question_type,
                    difficulty_level: testCase.difficulty_level,
                    module: testCase.module,
                    question: testCase.question,
                    marks: testCase.marks,
                    sensitivity: testCase.sensitivity,
                    explanation: testCase.explanation,
                    options: options,
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