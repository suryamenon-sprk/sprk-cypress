const ENV_BASE_URL = Cypress.env("BASE_URL");
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN");

const AUTH_HEADER = {
    ADMIN : `Bearer ${ENV_TOKEN}`
};

const API_URL = `${ENV_BASE_URL}/api/exam/add/question`;

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
};

//FIXTURE
let payload_register = [];

before(() => {
    cy.fixture("ExaminationBody/AddQuestionInPoolBody").then((data) => {
        payload_register = data;
    });
});

// // DESCRIPTION
// describe('POST - Add Question In Pool', () => {
//     // TEST
//     it('Add Question In Pool', () => {
//         payload_register.forEach(testCase => {

//             testCase.forEach(test=>{

                

//             // Check if options exist and is an array
        
//             let bodyPayload = {
//                 course: test.course,
//                 question_type: test.question_type,
//                 difficulty_level: test.difficulty_level,
//                 module: test.module,
//                 question: test.question,
//                 marks: test.marks,
//                 explanation: test.explanation,
//                 options: test.options,
//                 option: test.options.option,
//                 id : test.options.id,
//                 ans : test.options.ans
                
        
//             };

//             // REQUEST
//             cy.request({
//                 method: HttpMethod.POST,
//                 url: API_URL,
//                 failOnStatusCode: false,
//                 body: bodyPayload,
//                 headers: {
//                     Authorization: AUTH_HEADER.ADMIN
//                 }
//             }).then((response) => {
//                 expect(response.status).to.equal(testCase.expected_status_code);
//                 })
//             });
//         });

//     })
// });


describe('POST - Add Question In Pool', () => {
    it('Add Question In Pool', () => {
        payload_register.forEach(innerArray => {
            let bodyPayload = innerArray.map(testCase => {
                // Check if options exist and is an array
                const options = testCase.options && Array.isArray(testCase.options) ?
                    testCase.options.map(option => ({
                        option: option.option,
                        ans: option.ans,
                        id: option.id
                    })) :
                    [];

                return {
                    course: testCase.course,
                    question_type: testCase.question_type,
                    difficulty_level: testCase.difficulty_level,
                    module: testCase.module,
                    question: testCase.question,
                    marks: testCase.marks,
                    explanation: testCase.explanation,
                    options: options,
                };
            });

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload, // Send the entire array of questions
                headers: {
                    Authorization: AUTH_HEADER.ADMIN
                }
            }).then((response) => {
                // Assuming all test cases in the inner array expect the same status code
                expect(response.status).to.equal(innerArray[0].expected_status_code);
            });
        });
    });
});

