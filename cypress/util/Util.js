class Util {

    HttpMethod = {
        GET: "GET",
        POST: "POST",
        PATCH: "PATCH",
        DELETE: "DELETE"
    }

    BASE_URL = {
        AWS: "",
        NGROK: "https://mollusk-heroic-jaguar.ngrok-free.app"
    }



    // GETTERS
    getHttpMethod() {
        return this.HttpMethod;
    }

    getCurrentBaseURL() {
        return this.BASE_URL.NGROK
    }

}

export default Util