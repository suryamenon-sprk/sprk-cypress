const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4NjcwMjI3MDY0LCJpYXQiOjE2OTg2NzIxNzIsImV4cCI6MTY5ODc1ODU3Mn0.9A0MRt9VvSHzsZ8mBOckSLUfxd7zAK0GRnOZjH5K8cDCQtVsaMI2rbgX27RmNZo00IktVWWg0L4iSYcrCEoyaw`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTg2NDIwNzYsImV4cCI6MTY5ODcyODQ3Nn0.OpxRx5wD2Y-DcNIzLE6K-XRzQ18VPaCCJo-32xxe2FVxXtD52r7l_uw_uRofKLySgKiYMIjFifk24jnuKsWL-g`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`,
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
