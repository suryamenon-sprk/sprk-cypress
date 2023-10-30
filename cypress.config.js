const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTg2NDE4MTQsImV4cCI6MTY5ODcyODIxNH0.Y6h75juUujLnimJ5aOReQ47MT59zK1LtTtRqqzuV4pZGEGtZQubJWvehC8-BoB8RNBvYi0wX_Z8ildbGMtQl8g`,
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
