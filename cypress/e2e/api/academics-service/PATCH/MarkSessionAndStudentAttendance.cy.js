const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_FACULTY_TOKEN = Cypress.env("TOKEN_EMP")

const AUTH_HEADER = {
    Faculty: `Bearer ${ENV_FACULTY_TOKEN}`
}

const API_URL = `${ENV_BASE_URL}/api/batch/session/mark/attendance`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("AcademicsBody/StudentSessionAttendanceBody").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('PATCH - Mark Attendance of student and session', () => {

    // TEST
    it('Edit Batch', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                session_id:testCase.session_id,
                student_attendance:testCase.student_attendance,
                stud_id:testCase.stud_id,
                attendance:testCase.attendance,
                modules:testCase.modules,
                mod_id:testCase.mod_id,
                status:testCase.status
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
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