const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLQVY1QSIsInVwdCI6MTcwMTUwODQ2NTc5NSwiaWF0IjoxNzAxNzU2Mjk1LCJleHAiOjE3MDE4NDI2OTV9.ca3q9yNTqVZ_fKdC7JBpXg-d2gFxm7jiAAcV3UoW1qw`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUFJLMjNLUlU0NyIsInVwdCI6MTcwMDgwNTAzMzc2NywiaWF0IjoxNzAwODIxNDMwLCJleHAiOjE3MDA5MDc4MzB9.N8aR11eTlTGJS2Gob4IoXtJSfqGjEg_2-xBuAu3lwV4`,
    TOKEN_EMP:`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOSIsInVwdCI6MTY5OTg3MTk0Mjc4OCwiaWF0IjoxNjk5OTQ3NTgxLCJleHAiOjE3MDAwMzM5ODF9.CJ5PvPcZpO-Da88Nh36TujjLK1wQ_SwgjBsyAmR_T7s`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`,
  },

  
  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
