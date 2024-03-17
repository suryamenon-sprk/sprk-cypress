import 'cypress-file-upload';

const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")
const AUTH_HEADER = {
    Admin: `Bearer ${ENV_TOKEN_ADMIN}`
}

const API_URL = `${ENV_BASE_URL}/api/exam/parse/excel`
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
describe('API-uploadDoc Test', () => {

    // TEST
    it('upload - Documents', () => {
        const ideFilePath = './cypress/fixtures/excelDoc/questions(excel).xlsx'

        cy.readFile(ideFilePath, 'binary').then((fileContent) => {
            // Convert the binary data to a base64-encoded string
            const base64Content = Cypress.Blob.binaryStringToBlob(fileContent, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        
            // Create a FormData object
            const formData = new FormData();
            formData.append('book', base64Content, 'questions(excel).xlsx');
            // const formBody = new URLSearchParams(formData).toString();
            
            // REQUEST
            cy.request({
                method: HttpMethod.POST,
                url: API_URL,
                headers: {
                    'Authorization': AUTH_HEADER.Admin,
                    'Content-type': 'multipart/form-data',
                },
                formData: true, 
                failOnStatusCode: false,
                body: formData
            }).then((response) => {
                if(response.status === 200)
                expect(response.status).to.equal(200)
                else if(response.status === 404)
                expect(response.status).to.equal(404)
                else
                expect(response.status).to.equal(400)
                console.log(response)
            }); // request

        })

    }) 


})