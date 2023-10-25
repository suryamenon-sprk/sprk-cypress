const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    TOKEN_DEFAULT: `HALO`,
    TOKEN_ADMIN: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTgyMTQ3ODMsImV4cCI6MTY5ODMwMTE4M30.sIFt9trZ5VNJeUrBhspILIMtc0C2uJnttrVWyG2iz9domW2zKyveZY8vUaS6zUAgzIsVEA-5xsB0GMC_u1U8fw`,
    TOKEN_SALES: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwidXB0IjoxNjk4MDUyMDEyMjk0LCJpYXQiOjE2OTgyMTQ4MjQsImV4cCI6MTY5ODMwMTIyNH0.th089om-_GHfpTGcPDnQ47qQrGSvs1QdK0Mo_AFtuW_71_xMCZXTiUakdWmYLqB1AZ2P82vH66XKUgRNXpf8CQ`,
    BASE_URL: `https://mollusk-heroic-jaguar.ngrok-free.app`
  },

  e2e: {
    projectId: "yi8d6y",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
