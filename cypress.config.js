const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVY0NiIsInVwdCI6MTcwMzkyMzYzMzgxNiwiaWF0IjoxNzA0NDM2Nzc3LCJleHAiOjE3MDQ1MjMxNzd9.kDVGGptmRgi93xDVBOVWmmI7oXD1Su8YZV88WWclKlg`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLUlU2MSIsInVwdCI6MTcwMzIzMjg4MjYwMCwiaWF0IjoxNzAzODQ3MjU3LCJleHAiOjE3MDM5MzM2NTd9.7dDbLkROrhUBSx6ORRsLKecOMPUfe9RUbf_HCvQTFUQ`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOSIsInVwdCI6MTY5OTg3MTk0Mjc4OCwiaWF0IjoxNjk5OTQ3NTgxLCJleHAiOjE3MDAwMzM5ODF9.CJ5PvPcZpO-Da88Nh36TujjLK1wQ_SwgjBsyAmR_T7s`,
    BASE_URL: `http://localhost:8888`,
  },

  
  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
