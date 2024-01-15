const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRLQVY3MCIsInVwdCI6MTcwNDQ0Njk4MTQ1OCwiaWF0IjoxNzA1MjE4OTM5LCJleHAiOjE3MDUzMDUzMzl9.DfrNUM0_WXJxl4dU8UBE7Bm4edpNpzwWQe2qfGnGJjk`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRLUlUxNyIsInVwdCI6MTcwNDQ0Njk4MTg3NiwiaWF0IjoxNzA1MjMyOTI3LCJleHAiOjE3MDUzMTkzMjd9.ko3RAWbP-Aw6z4KAOwMBxwuCoXNAV22Ocg4xlSa5MoY`,
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