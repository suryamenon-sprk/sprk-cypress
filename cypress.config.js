const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA5MjA0ODEzLCJleHAiOjE3MDkyOTEyMTN9.ZnmSESg6JspAxa0z0PnG0OknzlY-3ARgoEsy5wY0jps`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLUlU0NyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA5MTg4MjYzLCJleHAiOjE3MDkyNzQ2NjN9.DtPijwIYnOuSTCbJW6M0Rb2WcB_TU3q2xqopzzwiLRw`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRTVVJBNCIsInVwdCI6MTcwODc2OTcxNjExMiwiaWF0IjoxNzA5MTg4MTMwLCJleHAiOjE3MDkyNzQ1MzB9.3AWyVMJcoYzzuJ2NTBFsQrcn_KTC9BLwsrQe873s2Ys`,
    BASE_URL: `wallaby-classic-gnat.ngrok-free.app`,
    BATCH_IDS: [`BTH24FEBCJAV1`,`BTH24FEBCJAV2`,`BTH24FEBTGST2`,`BTH24FEBTGST3`],
    SESSION_REQUEST: [`5cb9f217-eebd-42ec-bafc-bb797ec14540`,`cea41a1c-7e87-4fef-8457-63d842cc0b3e`,`3c90e80f-69a8-440a-974f-d83275cd4c1d`],
    FACULTY_ID: ["SPRK24SURA4","SPRK24DIS81"],
    PAYMENT_ID: ["f7ea93bf-a4ef-4ba9-a380-a1dec4814bd2","c7257883-5604-47c0-97c5-4117037faf4b","881fdd67-79c9-44a2-a1b3-adf700512c5e","518f92ca-50a2-4edb-8fff-2b7c59405c82","1c897630-19dd-4cf4-9a12-bc124e2891e6","c73e3cd8-e26d-412d-94f1-ee329f73cef0","0b4799cd-e2ce-41ab-8e6f-da9ba8c8b138","d679d6c4-8d4f-40ad-8a0d-876831a56196","4632afd8-4e0c-4d89-808d-9a30cdc6406e","8c6b383c-eb74-46a7-8b58-f52dd7d41361"],
    REQUEST_ID: ["REQ24444F1B","REQ24535FEC","REQ245E3A7A","REQ24F999EE","REQ24C3AA31"],

    auth: {
      kavita: {
        "user": "\"kavita@sprktechnologies.in\"",
        "token": "\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzA5MTkyMDM3LCJleHAiOjE3MDkyNzg0Mzd9.L7WmMm1YsLWV80CR_0dEPZX5GggHYOkGiZTOq6mVXlc\"",
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