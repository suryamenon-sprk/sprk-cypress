const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRLQVY3MCIsInVwdCI6MTcwNDQ0Njk4MTQ1OCwiaWF0IjoxNzA1Mzk4NzU3LCJleHAiOjE3MDU0ODUxNTd9.VGGAztGgD91oEPz4DG25vnQdQN-izk0C3DyaxE9_AQU`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRLUlUxNyIsInVwdCI6MTcwNDQ0Njk4MTg3NiwiaWF0IjoxNzA1Mzk4NzkwLCJleHAiOjE3MDU0ODUxOTB9.DFVlYorq4wbdCNic2yXXkMd9CisW3Kld88-aGCRdipY`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOSIsInVwdCI6MTY5OTg3MTk0Mjc4OCwiaWF0IjoxNjk5OTQ3NTgxLCJleHAiOjE3MDAwMzM5ODF9.CJ5PvPcZpO-Da88Nh36TujjLK1wQ_SwgjBsyAmR_T7s`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`,
  },

  
  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require(`cypress-mochawesome-reporter/plugin`)(on); //for html reports
    },
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp":"mmddyyyy_HHMMss"
  }
  },
});

//to run the test cases to get html report
//npx cypress run --spec mention the path of the test you want to run