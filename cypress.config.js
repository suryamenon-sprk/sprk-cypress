const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTk2ODM1ODUsImV4cCI6MTY5OTc2OTk4NX0.5icaSLh7sAzGWXZ1l806UmFyp12V3g-FdP83UVqnWus`,
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
