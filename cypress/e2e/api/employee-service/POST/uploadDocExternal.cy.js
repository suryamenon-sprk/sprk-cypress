const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN = Cypress.env("TOKEN_ADMIN")

const API_URL = `${ENV_BASE_URL}/api/auth/opn/emp`
const TOKEN = `Bearer ${ENV_TOKEN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

const fs = require('fs');
const path = require('path');


// //FIXTURE
// var payload_register = null
// before(() => {

//     cy.fixture("EmployeeDoc/emp-body").then((data) => {
//         payload_register = data
//     })

// })

// DESCRIPTION
describe('API-uploadDoc External Test', () => {

    // TEST
    it('upload - Documents External', () => {
        const ideFilePath = './cypress/fixtures/pdf/Surya_resume.pdf'

        cy.readFile(ideFilePath, 'binary').then((fileContent) => {
            // Convert the binary data to a base64-encoded string
            const base64Content = Cypress.Blob.binaryStringToBlob(fileContent, 'application/pdf');
        
            // Create a FormData object
            const formData = new FormData();
            formData.append('ide', base64Content);
            const formBody = new URLSearchParams(formData).toString();
            
            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                headers: {
                    'Authorization': TOKEN,
                    'Content-type': 'multipart/form-data',
                },
                formData: true, 
                failOnStatusCode: false,
                body: formBody
            }).then((response) => {
                expect(response.status).to.equal(400)
                console.log(response)
            }); // request

        })

    }) 


})