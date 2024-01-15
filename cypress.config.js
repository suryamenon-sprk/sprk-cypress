const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRLQVY3MCIsInVwdCI6MTcwNDQ0Njk4MTQ1OCwiaWF0IjoxNzA1MzEwMjg5LCJleHAiOjE3MDUzOTY2ODl9.fPYZWkYZNFrtslwJ3tWRBTCidFhC7GpSu43bqNwSFzA`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRLUlUxNyIsInVwdCI6MTcwNDQ0Njk4MTg3NiwiaWF0IjoxNzA1MzEwMzI0LCJleHAiOjE3MDUzOTY3MjR9.HnPV2jx202QXuPcFGRWJ7F2Twmc_BL_CaP3cnRpojvA`,
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