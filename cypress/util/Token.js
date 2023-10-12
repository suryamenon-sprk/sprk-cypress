import Helper from "./Helper"

class TokenHelper {

    util = new Helper();
    HttpMethod = this.util.getHttpMethod()
    Authorities = this.util.getAuthorities()
    CURRENT_BASE_URL = this.util.getCurrentBaseURL()
    bearerString = "Bearer "



    // FUNCTIONS
    getTokenByLogin(authority) {

        cy.log(authority)

        let username = null
        let password = null

        if (authority == this.Authorities.ADMIN) {
            username = "superuser"
            password = "Kavita@123"
        } 

        else if (authority == this.Authorities.SALES) {
            username = "krutika"
            password = "Krutika@123"
        }


        let bodyPayload = {
            "username_or_email": username,
            "password": password
        }

        return cy.request({
            method: this.HttpMethod.POST,
            url: this.CURRENT_BASE_URL + "/api/auth/login",
            body: bodyPayload
        }).then((response) => {
            expect(response.status).to.equal(200);
            return response.body.token;
        });
    }

}


export default TokenHelper