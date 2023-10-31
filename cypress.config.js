const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4NzM2MDc5MTE1LCJpYXQiOjE2OTg3MzY0OTYsImV4cCI6MTY5ODgyMjg5Nn0.BPSwoo-cZ2gC_Jk0ISQoq1G1onprr7v5Iuw6L6DNlgfwU7CwSsDWPd3HDclO-r_uk-QnSmj9AyCC6mUof_cELA`,
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
