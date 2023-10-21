const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk2NDgzMDE0Mjg5LCJpYXQiOjE2OTc4NjY5NzksImV4cCI6MTY5Nzk1MzM3OX0.BW-2I8rki-9mO6xvgWw3rN0gXJ1A7kJT803RuRS-lnP1fFN9R4NVfRny8runPdu0XQcn64UULh7h4d7c4-biIw`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjg4MTEyNDc0MDc3LCJpYXQiOjE2OTc4NjcwNjMsImV4cCI6MTY5Nzk1MzQ2M30.98AIQwMmwwmiBymwEUnheKHEGnMHepxNwPef7kxbnE3_nhci96DLHgHsEW5Q70lA2xQfwAKsfu3nUbSg4A20KQ`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
