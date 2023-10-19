const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTc2MDU1NjEsImV4cCI6MTY5NzY5MTk2MX0.jPHMSVDeWLJpvIAvv4rtoeGcVigF4EhIl6f1LOod8fqO6hELkKgzbG5cao2ldBYEb7ZY71rm1eWmJlA85SmLzg`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTc2MjQ1MzcsImV4cCI6MTY5NzcxMDkzN30.sz5hrPbHf2eu6Vsyv_QY2i557AV1tttOKE8lkcWEvIhtS6t8zZy6ZqvUs5w4LyDtuzDu3rUJ2sD4B6RNMu_hAQ`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
