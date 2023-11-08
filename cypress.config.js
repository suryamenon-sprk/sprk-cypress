const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTk0NDEwNDksImV4cCI6MTY5OTUyNzQ0OX0.GuNy_DTl6jvZhgMiuoe4vtztnD13uyPvwBBTl0iqOXo`,
    TOKEN_SALES: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTk0MzU4NzQsImV4cCI6MTY5OTUyMjI3NH0.gQnHasPqqPpr0eWlhJYAO3lIoUpvMf4LNSB41Yiwkq8`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`,
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
