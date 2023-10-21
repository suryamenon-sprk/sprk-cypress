import jwtDecode from "jwt-decode"
const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const ENV_TOKEN_SALES = Cypress.env("TOKEN_SALES")


const API_URL = `${ENV_BASE_URL}/api/enquiry/update/2`
const API_URL_ENQ = `${ENV_BASE_URL}/api/enquiry/1`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const TOKEN_SALES = `${ENV_TOKEN_SALES}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

var payload_register = null
before(() => {

    cy.fixture("EnquiryBody/update-enquiry-body").then((data) => {
        payload_register = data
    })

})

describe('API-updateEnquiry Test', () => {

    // TEST
    it('Update - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                student_firstname: testCase.student_firstname,
                student_middlename: testCase.student_middlename,
                student_lastname: testCase.student_lastname,
                birth_date: testCase.birth_date,
                gender: testCase.gender,
                residence_no: testCase.residence_no,
                flat_house_building: testCase.flat_house_building,
                area_street_sector_village: testCase.area_street_sector_village,
                landmark: testCase.landmark,
                pincode:testCase.pincode ,
                town_city: testCase.town_city,
                state: testCase.state,
                country: testCase.country,
                primary_mobile: testCase.primary_mobile,
                secondary_mobile: testCase.secondary_email,
                primary_email: testCase.primary_email,
                secondary_email: testCase.secondary_email,
                qualification: testCase.qualification,
                occupation: testCase.occupation,
                college_name: testCase.college_name,
                assigned_user: testCase.assigned_user ,
                discard_reason:testCase.discard_reason ,
                discard_by: testCase.discard_by,
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN_ADMIN}`
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
            }) // request

        }) // forEach
        it('Update - Enquiry', () => {

        payload_register.forEach((testCase) => {

            let bodyPayload = {
                student_firstname: testCase.student_firstname,
                student_middlename: testCase.student_middlename,
                student_lastname: testCase.student_lastname,
                birth_date: testCase.birth_date,
                gender: testCase.gender,
                residence_no: testCase.residence_no,
                flat_house_building: testCase.flat_house_building,
                area_street_sector_village: testCase.area_street_sector_village,
                landmark: testCase.landmark,
                pincode:testCase.pincode ,
                town_city: testCase.town_city,
                state: testCase.state,
                country: testCase.country,
                primary_mobile: testCase.primary_mobile,
                secondary_mobile: testCase.secondary_email,
                primary_email: testCase.primary_email,
                secondary_email: testCase.secondary_email,
                qualification: testCase.qualification,
                occupation: testCase.occupation,
                college_name: testCase.college_name,
                assigned_user: testCase.assigned_user ,
                discard_reason:testCase.discard_reason ,
                discard_by: testCase.discard_by,
            }

            // REQUEST
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN_SALES}`
                }
            }).then((response) => {
                expect(response.status).to.equal(testCase.expected_status_code)
                let responseBody = response.body

                const decodedToken = jwtDecode(TOKEN_SALES);
                const userId = decodedToken.sub;

                responseBody.forEach(obj => {
                    expect(obj.assigned_user.user_id).to.equal(Number(userId))
                });
            }) // request

        })

    }) }) 
})