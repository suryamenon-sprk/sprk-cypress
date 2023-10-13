import Helper from "../../../../util/Helper";

var util = new Helper
const HttpMethod = util.getHttpMethod()
const CURRENT_BASE_URL = util.getCurrentBaseURL()

//FIXTURE
var payload_register = null
before(() => {

    cy.fixture("register-users")
    .then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-Register Test', () => {

    // TEST
    it('Register - user', () => {

        payload_register.forEach((testCase) => {

        let bodyPayload = {
            "firstname": testCase.firstname,
            "middlename": testCase.middlename,
            "lastname": testCase.lastname,
            "username": testCase.username,
            "email": testCase.email,
            "password": testCase.password,
            "org_id": testCase.org_id
        }

        // REQUEST
        cy.request({
            method: HttpMethod.POST,
            url: CURRENT_BASE_URL + "/api/auth/register",
            failOnStatusCode: false,
            body: bodyPayload
        }).then((response) => {
            expect(response.status).to.equal(testCase.expected_status_code)
        })

    }) 
    });

})
