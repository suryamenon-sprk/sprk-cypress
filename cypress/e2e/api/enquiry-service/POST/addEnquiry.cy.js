const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/enquiry/add`
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

    cy.fixture("EnquiryBody/enquiry-body").then((data) => {
        payload_register = data
    })

})

// DESCRIPTION
describe('API-addEnquiry Test', () => {

    // TEST
    it('Create - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                student_firstname: testCase.student_firstname,
                student_middlename: testCase.student_middlename,
                student_lastname: testCase.student_lastname,
                referral_firstname: testCase.referral_firstname,
                referral_middlename: testCase.referral_middlename,
                referral_lastname: testCase.referral_lastname,
                birth_date: testCase.birth_date,
                gender: testCase.gender,
                residence_no: testCase.residence_no,
                flat_house_building: testCase.flat_house_building,
                area_street_sector_village: testCase.area_street_sector_village,
                landmark: testCase.landmark,
                pincode: testCase.pincode,
                town_city: testCase.town_city,
                state: testCase.state,
                country: testCase.country,
                primary_mobile: testCase.primary_mobile,
                secondary_mobile: testCase.secondary_mobile,
                primary_email: testCase.primary_email,
                secondary_email: testCase.secondary_email,
                qualification: testCase.qualification,
                occupation: testCase.occupation,
                college_name: testCase.college_name,
                career_requirement: testCase.career_requirement,
                software_known: testCase.software_known,
                course_history: testCase.course_history,
                heard_from: testCase.heard_from,
            }

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
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach

    }) })