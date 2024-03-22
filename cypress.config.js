const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: `cypress-mochawesome-reporter`, //for html reports

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzEwNDA5OTkzLCJleHAiOjE3MTA0OTYzOTN9.m2dLQcjWSH2R7Zmrccrfj05GVWOz0zgDqAumEkF1x9A`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLUlU0NyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzEwNDg1MDA5LCJleHAiOjE3MTA1NzE0MDl9.7lHllbTWwC66xTzY3sHOC92RRlyUNyExYBVj73VH1oY`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRTVVJBNCIsInVwdCI6MTcwODc2OTcxNjExMiwiaWF0IjoxNzEwNDg1MDc0LCJleHAiOjE3MTA1NzE0NzR9.6JQXRYrof1C5zxq29FjmaOR0PNyDVpY_Rj1G5IV3aX8`,
    BASE_URL: `https://7bnmx6hw-8888.inc1.devtunnels.ms`,
    BATCH_IDS: [`BTH24FEBCJAV1`,`BTH24FEBPYTH1`,`BTH24FEBBEXL1`,`BTH24FEBPYTH2`],
    SESSION_REQUEST: [`f78d2f17-1b78-408b-a077-23e508086f3b`,`21b62c65-ed7b-4109-8ea2-dfd586f54096`,`40708e5b-2918-4167-be35-3b214a465131`],
    FACULTY_ID: ["SPRK24SURA4","SPRK24AKA01"],
    PAYMENT_ID: ["a46208d5-7b10-40e8-a250-4abd27a2350b","2416d8b3-a288-483c-bc27-c86bd6615a65","af70e7df-e98e-4c05-ae47-6a856c53d471","c861f237-8a82-47b3-b0d2-576747379395","02445c32-1b50-47eb-81f5-95cc52243d1f"],
    REQUEST_ID: ["REQ24B10E29","REQ2485C902","REQ249812A3","REQ24D2F72A"],

    auth: {
      kavita: {
        "user": "\"kavita@sprktechnologies.in\"",
        "token": "\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzExMDk5OTgxLCJleHAiOjE3MTExODYzODF9.XZLtr5spP651t4ZB0bWtFggHvmeOVtuWECv3VTN39Hs\"",
        "roles": "[\"ROLE_ADMIN\"]",
        "userId": "\"SPRK23KAV0C\"",
        "userDetails": "{\"emp_id\":\"SPRK23KAV0C\",\"name\":\"Kavita Pankaj Pawar\",\"email\":\"kavita@sprktechnologies.in\",\"enabled\":true,\"authorities\":[\"ROLE_ADMIN\"],\"profile\":true,\"entitlements\":[{\"name\":\"CENTER\",\"sub\":[{\"name\":\"ENROLLMENTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"BOOKINGS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"COLLECTIONS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"RBC\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"BATCH_SCHEDULING\",\"sub\":[{\"name\":\"BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"FACULTY_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"STUDENT_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"SESSION_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"LMS\",\"sub\":[{\"name\":\"LEADS\",\"actions\":[\"DELETE\",\"VIEW\",\"CREATE\"]}]},{\"name\":\"EMS\",\"sub\":[{\"name\":\"EMPLOYEES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"PORTAL_ACCESS_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"ACTIVITIES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"LEAVE_REQUESTS\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"ACADEMICS\",\"sub\":[{\"name\":\"DASHBOARD\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"EXAMINATION\",\"sub\":[{\"name\":\"QUESTION_BANK\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"QUESTION_SETS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"SCHEDULED_EXAMS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"FACULTY_SKILLS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"STUDENT_EXAMS\",\"actions\":[\"VIEW\",\"CREATE\"]}]}]}",
        "entitlements": "[{\"name\":\"LMS\",\"sub\":[{\"name\":\"LEADS\",\"actions\":[\"DELETE\",\"VIEW\",\"CREATE\"]}]},{\"name\":\"CENTER\",\"sub\":[{\"name\":\"ENROLLMENTS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"BOOKINGS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"COLLECTIONS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"RBC\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"EMS\",\"sub\":[{\"name\":\"EMPLOYEES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"PORTAL_ACCESS_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"ACTIVITIES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"LEAVE_REQUESTS\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"ACADEMICS\",\"sub\":[{\"name\":\"DASHBOARD\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"BATCH_SCHEDULING\",\"sub\":[{\"name\":\"BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"FACULTY_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"STUDENT_SCHEDULE\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"SESSION_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]},{\"name\":\"EXAMINATION\",\"sub\":[{\"name\":\"QUESTION_BANK\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"QUESTION_SETS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"SCHEDULED_EXAMS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"FACULTY_SKILLS\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"STUDENT_EXAMS\",\"actions\":[\"VIEW\",\"CREATE\"]}]}]",
        "tabName": "[\"LMS\",\"LEADS\",\"CENTER\",\"ENROLLMENTS\",\"BOOKINGS\",\"COLLECTIONS\",\"RBC\",\"EMS\",\"EMPLOYEES\",\"PORTAL_ACCESS_REQUEST\",\"ACTIVITIES\",\"LEAVE_REQUESTS\",\"ACADEMICS\",\"DASHBOARD\",\"MY_BATCHES\",\"MY_REQUEST\",\"BATCH_SCHEDULING\",\"BATCHES\",\"FACULTY_SCHEDULE\",\"STUDENT_SCHEDULE\",\"SESSION_REQUEST\",\"EXAMINATION\",\"QUESTION_BANK\",\"QUESTION_SETS\",\"SCHEDULED_EXAMS\",\"FACULTY_SKILLS\",\"STUDENT_EXAMS\"]",
        "selectedIds": "null",
        "studentData": "null",
        "receiptObj": "null",
        "userProfilePic": "null",
        "salesRole": "[{\"user_id\":1,\"name\":\"Kavita Pankaj Pawar\"},{\"user_id\":2,\"name\":\"Krutika Rushi Rushi\"},{\"user_id\":4,\"name\":\"Disha shah\"},{\"user_id\":5,\"name\":\"Surya Menon\"},{\"user_id\":6,\"name\":\"ketan kadam\"},{\"user_id\":16,\"name\":\"Shivraj Yelave\"},{\"user_id\":9,\"name\":\"rakesh XYZ lolam\"},{\"user_id\":8,\"name\":\"rahul bhosale\"},{\"user_id\":12,\"name\":\"Rajesh ashok kadam\"},{\"user_id\":15,\"name\":\"Umesh Yelave\"}]",
        "_persist": "{\"version\":1,\"rehydrated\":true}"
      },
      pranav: {
        "user": "\"SPRK24PRAC9\"",
        "token": "\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRQUkFDOSIsInVwdCI6MTcxMDMxNTIxODUwNiwiaWF0IjoxNzEwMzE3ODU5LCJleHAiOjE3MTA0MDQyNTl9.45Rca2WTyCMuJ9K0Ov1jaMPZCjW_gfz_lav_3yUaqwI\"",
        "roles": "[\"ROLE_FACULTY\"]",
        "userId": "\"SPRK24PRAC9\"",
        "userDetails": "{\"emp_id\":\"SPRK24PRAC9\",\"name\":\"Pranav Jadhav\",\"email\":\"angela27116@gmail.com\",\"enabled\":true,\"authorities\":[\"ROLE_FACULTY\"],\"profile\":false,\"entitlements\":[{\"name\":\"ACADEMICS\",\"sub\":[{\"name\":\"DASHBOARD\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]}]}",
        "entitlements": "[{\"name\":\"ACADEMICS\",\"sub\":[{\"name\":\"DASHBOARD\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_BATCHES\",\"actions\":[\"VIEW\",\"CREATE\"]},{\"name\":\"MY_REQUEST\",\"actions\":[\"VIEW\",\"CREATE\"]}]}]",
        "tabName": "[\"ACADEMICS\",\"DASHBOARD\",\"MY_BATCHES\",\"MY_REQUEST\"]",
        "selectedIds": "null",
        "studentData": "null",
        "receiptObj": "null",
        "userProfilePic": "null",
        "salesRole": "null",
        "_persist": "{\"version\":1,\"rehydrated\":true}"
    },
    shiv:
      {
        "user": "\"SPRK24SHI35\"",
        "token": "\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRTSEkzNSIsInVwdCI6MTcxMDQ4MjA3NTMzNywiaWF0IjoxNzEwOTk3NTk1LCJleHAiOjE3MTEwODM5OTV9.txscyG5jt255Ra6nKOwZgSIWWT0UfFTXdgKgN-C5wMI\"",
        "roles": "[\"ROLE_SALES\"]",
        "userId": "\"SPRK24SHI35\"",
        "userDetails": "{\"emp_id\":\"SPRK24SHI35\",\"name\":\"shivraj Yalave\",\"email\":\"shivyelave@gmail.com\",\"enabled\":true,\"authorities\":[\"ROLE_SALES\"],\"profile\":false,\"entitlements\":[{\"name\":\"LMS\",\"sub\":[{\"name\":\"LEADS\",\"actions\":[\"DELETE\",\"CREATE\",\"VIEW\"]}]},{\"name\":\"CENTER\",\"sub\":[{\"name\":\"BOOKINGS\",\"actions\":[\"CREATE\",\"VIEW\"]},{\"name\":\"RBC\",\"actions\":[\"CREATE\",\"VIEW\"]},{\"name\":\"ENROLLMENTS\",\"actions\":[\"CREATE\",\"VIEW\"]},{\"name\":\"COLLECTIONS\",\"actions\":[\"CREATE\",\"VIEW\"]}]}]}",
        "entitlements": "[{\"name\":\"LMS\",\"sub\":[{\"name\":\"LEADS\",\"actions\":[\"DELETE\",\"CREATE\",\"VIEW\"]}]},{\"name\":\"CENTER\",\"sub\":[{\"name\":\"BOOKINGS\",\"actions\":[\"CREATE\",\"VIEW\"]},{\"name\":\"RBC\",\"actions\":[\"CREATE\",\"VIEW\"]},{\"name\":\"ENROLLMENTS\",\"actions\":[\"CREATE\",\"VIEW\"]},{\"name\":\"COLLECTIONS\",\"actions\":[\"CREATE\",\"VIEW\"]}]}]",
        "tabName": "[\"LMS\",\"LEADS\",\"CENTER\",\"BOOKINGS\",\"RBC\",\"ENROLLMENTS\",\"COLLECTIONS\"]",
        "selectedIds": "null",
        "studentData": "null",
        "receiptObj": "null",
        "userProfilePic": "null",
        "salesRole": "[{\"user_id\":1,\"name\":\"Kavita Pankaj Pawar\"},{\"user_id\":2,\"name\":\"Krutika Rushi Rushi\"},{\"user_id\":4,\"name\":\"Disha shah\"},{\"user_id\":5,\"name\":\"Surya Menon\"},{\"user_id\":6,\"name\":\"ketan kadam\"},{\"user_id\":16,\"name\":\"shivraj Yalave\"},{\"user_id\":9,\"name\":\"rakesh XYZ lolam\"},{\"user_id\":8,\"name\":\"rahul bhosale\"},{\"user_id\":12,\"name\":\"Rajesh ashok kadam\"},{\"user_id\":15,\"name\":\"Umesh Yelave\"}]",
        "_persist": "{\"version\":1,\"rehydrated\":true}"
    }
    
    },
    token: {
      kavita:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVYwQyIsInVwdCI6MTcwMDgwNTAzMzIwNCwiaWF0IjoxNzEwMTM3NzYyLCJleHAiOjE3MTAyMjQxNjJ9.CR8hrXtZtRpEVgIIpXToRq-dbnAafjl_bkvvOKR_1Vs",
      pranav:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRQUkFDOSIsInVwdCI6MTcxMDMxNTIxODUwNiwiaWF0IjoxNzEwMzE2MTMyLCJleHAiOjE3MTA0MDI1MzJ9.-7lEkFttg1jtrsWNa_2tO4jOe6NAr5VIHz9ZkzcVquE",
      
      shiv:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjRTSEkzNSIsInVwdCI6MTcxMDQ4MjA3NTMzNywiaWF0IjoxNzEwOTI2ODQ0LCJleHAiOjE3MTEwMTMyNDR9.9HbpfjLWlJTwT_SOLb3421cgkRtUotcUMScJRIAmzKI",
      },
    portal_url: "https://4f0w8jbl-3000.inc1.devtunnels.ms",
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require(`cypress-mochawesome-reporter/plugin`)(on); //for html reports
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: true,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});

//to run the test cases to get html report
//npx cypress run --spec mention the path of the test you want to run
