import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";

describe(
  "SPRK-Portal (LMS)",
  () => {

    beforeEach(() => {
      bypassLogin(
        Cypress.env("auth").kavita,
        Cypress.env("token").kavita
      )
      skipMSTunnelWarning(base_url)
    });
    const base_url = getPortalUrl() + "/Lms"


    it(
      "Enquiry Tab",
      () => {}
    )


  } // actual test cases
)