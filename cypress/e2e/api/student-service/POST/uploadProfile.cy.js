const ENV_BASE_URL = Cypress.env("BASE_URL")
const ENV_TOKEN_ADMIN = Cypress.env("TOKEN_ADMIN")


const API_URL = `${ENV_BASE_URL}/api/student/preview`
// const API_URL_ENQ = `${ENV_BASE_URL}/api/enquiry/1`
const TOKEN_ADMIN = `${ENV_TOKEN_ADMIN}`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


describe('API-uploadProfile Test', () => {
    

    // TEST
    it('Uplaod - Profile', 
        () => {
            let bodyPayload;

            cy.readFile('D:\\images\\cal.jpg', 'base64').then((fileContent) => {
                 bodyPayload = {
                    image: fileContent,
                  }
            })
            

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
                    
                    expect(response.status).to.equal(400)
                    
                }) // request


        } // function
    ) // it
    
    
})
