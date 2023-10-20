const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTc3OTYxMjYsImV4cCI6MTY5Nzg4MjUyNn0.mP_IIcZQMga1_f65jl58BMsrYVhF3YFlU74dEZVzQ0OyzR0VR9rQSEXudEKYybfXY5ntPTMVrMOOTJNWeUWj4g`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTc3OTYxNjIsImV4cCI6MTY5Nzg4MjU2Mn0.Aog_cQpd_UYbA484gS99LO2Zb26rj0QcbzMlvQz33_nIwZO1WehMe3H1wpb-0VVkjZ97XrHfMpw3c1uO45FPuA`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
