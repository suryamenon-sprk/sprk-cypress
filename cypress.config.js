const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA4MzE5NTAyLCJleHAiOjE3MDg0MDU5MDJ9.lpsIFak_R4LYlfefXzeS0mPqD3RIOfT95dAJ3oz4PpM`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLUlU0NyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA4MzE5NTU5LCJleHAiOjE3MDg0MDU5NTl9.LRa6AIWu1dz_M8YkYZPmpm1iw1NEn11782BTddHy6Bk`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRBUkswOCIsInVwdCI6MTcwNzI5Nzg3NDA1MiwiaWF0IjoxNzA4MzE5NTk0LCJleHAiOjE3MDg0MDU5OTR9.CB_HQBYkszzXY-_jfkCiYhtqzHT8M8zw7W_S_mDO_co`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`,
    BATCH_IDS: [`BTH24FEBCSS31`,`BTH24FEBAEXL1`,`BTH24FEBBEXL3`,`BTH24FEBBEXL4`],
    SESSION_REQUEST: [`618cc836-60f0-4691-9dbc-d1d7450bb28b`,`5982e0e1-e804-49cb-9f0c-b3b6a9ed6442`,`758ab32f-c65b-464c-a0db-16a96ff4be03`]
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