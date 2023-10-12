class Helper {

    HttpMethod = {
        GET: "GET",
        POST: "POST",
        PATCH: "PATCH",
        DELETE: "DELETE"
    }

    HttpHeaders = {
        AUTHORIZATION: "Authorization"
    }

    Authorities = {
        ADMIN: "ADMIN",
        SALES: "SALES",
        DEFAULT: "DEFAULT"
    }

    BASE_URL = {
        AWS: "",
        NGROK: "https://mollusk-heroic-jaguar.ngrok-free.app"
    }


    // GETTERS
    getHttpMethod() {
        return this.HttpMethod;
    }

    getHttpHeaders() {
        return this.HttpHeaders;
    }

    getAuthorities() {
        return this.Authorities;
    }

    getCurrentBaseURL() {
        return this.BASE_URL.NGROK
    }

}

export default Helper