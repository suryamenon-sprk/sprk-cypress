const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/student/booking`
const API_URL_ENQ = `${ENV_BASE_URL}/api/enquiry/1`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}



var payload_register = null

before(() => {

    cy.fixture("StudentBody/booking-body").then((data) => {
        payload_register = data
    })

})

describe('API-addBooking Test', () => {
    

    // TEST
    it('Add - Booking', 
        () => {
            
            payload_register.forEach((testCase) => {

                let bodyPayload = {
                    course_group_id: testCase.course_group_id,
                    student_id: testCase.student_id,
                    enquiry_id: testCase.enquiry_id,
                    credit_id: testCase.credit_id,
                    total_fees: testCase.total_fees,
                    number_of_installments: testCase.number_of_installments,
                    registration_payment: testCase.registration_payment,
                    gst: testCase.gst,
                    discount_amount: testCase.discount_amount,
                    discount_reason: testCase.discount_reason
                }

                // REQUEST
                cy.request({
                    method: HttpMethod.POST,
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


        } // function
    ) // it
    
    
})