const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTgxNTgxMTgsImV4cCI6MTY5ODI0NDUxOH0.usqlxQLYqpqb5r_6usFMKlQqZAcOK49DujeJpoDjYUqHRf-DYnqhwL0dMiniYCvlez_-lPI5DeGCZc6n3JdSGQ`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTgxNjY3MTYsImV4cCI6MTY5ODI1MzExNn0.C2TTNQt5LhdX_NiI6JuxnohSwieccCmuFFiJbtSy7ZOV0q4BqxptSm5nJBEdvwbcOS2Knh5Kiy3minMJu6Tjew`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
