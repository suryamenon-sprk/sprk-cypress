const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const AUTH_HEADER = {
    ADMIN : `Bearer ${ENV_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/exam/add/question`

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("ExaminationBody/AddQuestionInPoolBody").then((data) => {
        payload_register = data.flat();
    })

})

// DESCRIPTION
describe('POST - Add Question In Pool', () => {

    

    // TEST
    it('Add Question In Pool', () => {

        payload_register.forEach(testCaseArray => {
            const testCase = testCaseArray[0]; // Extract the test case from the nested array

            // Process options to ensure it's in the correct format
            const options = testCase.options.map(option => ({
                option: option.option,
                ans: option.ans
            }));
            
       
            let bodyPayload = {
                course: testCase.course,
                question_type: testCase.question_type,
                difficulty_level: testCase.difficulty_level,
                module: testCase.module,
                question: testCase.question,
                marks: testCase.marks,
                explanation: testCase.explanation,
                options:options,
            };

            //  // Adding options to bodyPayload
            //  if (testCase.options) {
            //     testCase.options.forEach(option => {
            //         bodyPayload.options.push({
            //             option: option.option,
            //             ans: option.ans
            //         })
            //     })
            // }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: AUTH_HEADER.Admin
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

                    }) // forEach

                })

            });

        