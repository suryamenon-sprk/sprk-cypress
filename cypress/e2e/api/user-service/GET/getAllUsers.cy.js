import Helper from "../../../../util/Helper"
import TokenHelper from "../../../../util/Token";


// MEMBERS
var util = new Helper();
var tokenHelper = new TokenHelper();

const Authorities = util.getAuthorities()
const HttpMethod = util.getHttpMethod()
const CURRENT_BASE_URL = util.getCurrentBaseURL()



// DESCRIBE
describe("GET - Users-All (ADMIN)", () => {


    it('WITHOUT AUTH HEADER', () => {
        cy.request({
            method: HttpMethod.GET,
            url: CURRENT_BASE_URL + "/api/auth/users",
            failOnStatusCode: false,
            headers: {
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(404)

            // let responseBody = response.body;

            // if ('error' in responseBody)
            // if (responseBody.hasOwnProperty('error'))
            //     cy.log(responseBody.error)
            // else
            //     cy.log(responseBody)

        })
    });




    it('Random shit inside Authorization Header', () => {
        cy.request({
            method: HttpMethod.GET,
            url: CURRENT_BASE_URL + "/api/auth/users",
            failOnStatusCode: false,
            headers: {
                "Authorization": "HALO",
                "ngrok-skip-browser-warning": true
            }
        }).then((response) => {
            expect(response.status).to.equal(400)
            cy.log(response.body.error)
        })
    });




    it('Token superuser - Authorization Header', () => {
        
        tokenHelper
        .getTokenByLogin(Authorities.ADMIN)
        .then((token) => {
            
            cy.request({
                method: HttpMethod.GET,
                url: CURRENT_BASE_URL + "/api/auth/users",
                failOnStatusCode: false,
                headers: {
                    "Authorization": token,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                cy.log(response.body)
            })

        })

    });






    it(' Token-Sales - Sales should not have access to all users data', () => {
        tokenHelper
        .getTokenByLogin(Authorities.SALES)
        .then((token) => {

            cy.request({
                method: HttpMethod.GET,
                url: CURRENT_BASE_URL + "/api/auth/users",
                failOnStatusCode: false,
                headers: {
                    "Authorization": token,
                    "ngrok-skip-browser-warning": true
                }
            }).then((response) => {
                expect(response.status).to.equal(403)
                cy.log(response.body)
            })


        })
    });

})