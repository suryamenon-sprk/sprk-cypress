const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTcyMDMxNDQsImV4cCI6MTY5NzI4OTU0NH0.SIVl8GBjl8SCx_rJa_yomw_YB_htzWGFWiI8lFZgmWXEfMYYxNXCpR62qaYTkJ3-2ZkoXbwXodm4oCEVZpIXmA`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTcyMDMyMDMsImV4cCI6MTY5NzI4OTYwM30.Y2i5pBcgVn1DPKiOXJgSydEvmRY4KkD4cvrrtToeoO-X92zhskwu0WLJO-jEzp34jsTrvHL3flT5pJkJbYmLfw`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
