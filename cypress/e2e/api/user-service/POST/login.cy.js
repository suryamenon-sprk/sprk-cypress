import Helper from "../../../../util/Helper"


// MEMBERS
var util = new Helper();
const HttpMethod = util.getHttpMethod()
const CURRENT_BASE_URL = util.getCurrentBaseURL()



// FIXTURE
var payload_superuser = null
before(() => {

    cy.fixture("login-superuser")
    .then((data) => {
        payload_superuser = data
    })

})



// DESCRIPTION
describe('API-Login Test', () => {

    // TEST
    it('Login - superuser', () => {

        // LOOP
        payload_superuser.forEach((testCase) => {

            cy.log(testCase.description)

            let bodyPayload = {
                "username_or_email": testCase.username_or_email,
                "password": testCase.password
            }

            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: CURRENT_BASE_URL + "/api/auth/login",
                failOnStatusCode: false,
                body: bodyPayload
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            })

        })

        
    });




})