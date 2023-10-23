const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTgwMzY2MDgsImV4cCI6MTY5ODEyMzAwOH0.9UPSA-PamSKi_-vueNxOnrfT6YyOULfAnEfXrzUuuw041sxrT58s32FkA4hgFhv7fucOQDCC0GTOI47pVfs5yw`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTgwMzY2MzgsImV4cCI6MTY5ODEyMzAzOH0.eOi2L00Y4ZRINOp6slFbOQmUwPG0AZuv2hDrZbP477ta6hr_ZWA63NmbRxcJQsIvhLdILMRevjj8DPF011wxOQ`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
