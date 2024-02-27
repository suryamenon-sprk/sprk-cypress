const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA5MDE5MzUzLCJleHAiOjE3MDkxMDU3NTN9.eV6dKtN7LARuXEUWFb3ylRImTAoF09Ak8xvu2N6rdMM`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLUlU0NyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA4MzE5NTU5LCJleHAiOjE3MDg0MDU5NTl9.LRa6AIWu1dz_M8YkYZPmpm1iw1NEn11782BTddHy6Bk`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRBUkswOCIsInVwdCI6MTcwNzI5Nzg3NDA1MiwiaWF0IjoxNzA4MzE5NTk0LCJleHAiOjE3MDg0MDU5OTR9.CB_HQBYkszzXY-_jfkCiYhtqzHT8M8zw7W_S_mDO_co`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`,
    BATCH_IDS: [`BTH24FEBCSS31`,`BTH24FEBAEXL1`,`BTH24FEBBEXL3`,`BTH24FEBBEXL4`],
    SESSION_REQUEST: [`618cc836-60f0-4691-9dbc-d1d7450bb28b`,`5982e0e1-e804-49cb-9f0c-b3b6a9ed6442`,`758ab32f-c65b-464c-a0db-16a96ff4be03`],

    auth: {
      kavita: {
        "user": "\"kavita@sprktechnologies.in\"",
        "token": "\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA5MDE5MzUzLCJleHAiOjE3MDkxMDU3NTN9.eV6dKtN7LARuXEUWFb3ylRImTAoF09Ak8xvu2N6rdMM\"",
        "roles": "[\"ROLE_ADMIN\"]",
        "userId": "\"SPRK23KAV0C\"",
        "userDetails": "{\"emp_id\":\"SPRK23KAV0C\",\"name\":\"Kavita Pankaj Pawar\",\"email\":\"kavita@sprktechnologies.in\",\"enabled\":true,\"authorities\":[\"ROLE_ADMIN\"],\"profile\":false,\"entitlements\":[{\"name\":\"EMS\",\"sub\":[{\"name\":\"REQUESTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"LEAVE_REQUESTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"FACULTY_EXAM\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"EMPLOYEES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"ACTIVITIES\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"ACADEMICS\",\"sub\":[{\"name\":\"MY_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"DASHBOARD\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"BATCH_SCHEDULING\",\"sub\":[{\"name\":\"FACULTY_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"STUDENT_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"SESSION_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"LMS\",\"sub\":[{\"name\":\"LEADS\",\"actions\":[\"VIEW\",\"CREATE\",\"DELETE\"]}]},{\"name\":\"CENTER\",\"sub\":[{\"name\":\"BOOKINGS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"COLLECTIONS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"ENROLLMENTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"RBC\",\"actions\":[\"VIEW\",\"CREATE\"]}]}]}",
        "entitlements": "[{\"name\":\"EMS\",\"sub\":[{\"name\":\"REQUESTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"LEAVE_REQUESTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"FACULTY_EXAM\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"EMPLOYEES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"ACTIVITIES\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"ACADEMICS\",\"sub\":[{\"name\":\"MY_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"DASHBOARD\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"BATCH_SCHEDULING\",\"sub\":[{\"name\":\"FACULTY_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"STUDENT_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"SESSION_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"LMS\",\"sub\":[{\"name\":\"LEADS\",\"actions\":[\"VIEW\",\"CREATE\",\"DELETE\"]}]},{\"name\":\"CENTER\",\"sub\":[{\"name\":\"BOOKINGS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"COLLECTIONS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"ENROLLMENTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"RBC\",\"actions\":[\"VIEW\",\"CREATE\"]}]}]",
        "tabName": "[\"EMS\",\"REQUESTS\",\"LEAVE_REQUESTS\",\"FACULTY_EXAM\",\"EMPLOYEES\",\"ACTIVITIES\",\"ACADEMICS\",\"MY_REQUEST\",\"MY_BATCHES\",\"DASHBOARD\",\"BATCH_SCHEDULING\",\"FACULTY_SCHEDULE\",\"STUDENT_SCHEDULE\",\"BATCHES\",\"SESSION_REQUEST\",\"LMS\",\"LEADS\",\"CENTER\",\"BOOKINGS\",\"COLLECTIONS\",\"ENROLLMENTS\",\"RBC\"]",
        "selectedIds": "null",
        "studentData": "null",
        "receiptObj": "null",
        "userProfilePic": "null",
        "salesRole": "null",
        "_persist": "{\"version\":1,\"rehydrated\":true}"
      }
    },
    token: {
      kavita: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA4OTMwMDgwLCJleHAiOjE3MDkwMTY0ODB9.GwOcKC6COrZqdM6Crab_WV00CI7_t8R7NKPRCbG2nzA"
    },
    portal_url: "https://rfc2rnvg-3000.inc1.devtunnels.ms",
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