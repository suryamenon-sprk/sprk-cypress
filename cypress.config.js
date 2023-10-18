const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTc2MDU1NjEsImV4cCI6MTY5NzY5MTk2MX0.jPHMSVDeWLJpvIAvv4rtoeGcVigF4EhIl6f1LOod8fqO6hELkKgzbG5cao2ldBYEb7ZY71rm1eWmJlA85SmLzg`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTcyMDMyMDMsImV4cCI6MTY5NzI4OTYwM30.Y2i5pBcgVn1DPKiOXJgSydEvmRY4KkD4cvrrtToeoO-X92zhskwu0WLJO-jEzp34jsTrvHL3flT5pJkJbYmLfw`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
