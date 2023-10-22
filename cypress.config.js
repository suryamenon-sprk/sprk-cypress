const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTc5ODg3NzQsImV4cCI6MTY5ODA3NTE3NH0.nmGd1bhDJdIG7EVsf82A3uSFNm4dO1JXGzt6flqwZaKsI6bHP2lLxe62I6PBIOpP3QTGthVFabP2lbMbuSIY4g`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTc5ODg4NTcsImV4cCI6MTY5ODA3NTI1N30.Ez9JDUkmc99JFQhumAwsetuzVDmhQSq1yAtwcjMLhBPR5S_clAzvSljzGPFRFlLjViSFbn6S-0Tmf3GtyhVlLQ`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
