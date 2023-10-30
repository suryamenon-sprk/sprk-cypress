const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/auth/opn/emp`
const TOKEN = `${ENV_TOKEN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("EmployeeDoc/update-emp-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-updateEmployee Test', () => {

    // TEST
    it('Update - Employee', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                firstname: testCase.firstname,
                middlename: testCase.middlename,
                lastname: testCase.lastname,
                phone: testCase.phone,
                alt_phone: testCase.alt_phone,
                gender: testCase.gender,
                email: testCase.email,
                alt_email: testCase.alt_email,
                blood_group: testCase.blood_group,
                marital_status: testCase.marital_status,
               
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request
        }) // forEach

    }) })