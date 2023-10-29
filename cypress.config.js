const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTg1OTM5OTEsImV4cCI6MTY5ODY4MDM5MX0.S8N2b2hxpjn6O4eKSLhkmqSOXXw9hsGZkv6YaaddYhhxo3lNkaSBVxb485DJRtNVpL-A1CJ75VjTBhEk8nxLsA`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTg0NzMxMjksImV4cCI6MTY5ODU1OTUyOX0.AN4CU5el5RxtESO3iCxdnoJ6zynOEEADbBVTZROgcZcW1NhQUgd0D-xyPOoNQTBXlkEgq08cqObMGc6MwyAt5w`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
