import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";

describe(
  "SPRK-Portal (EMS)",
  () => {

    beforeEach(() => bypassLogin());
    const base_url = getPortalUrl() + "/Lms"
    function loadPage() {
      skipMSTunnelWarning(base_url)
    }

    it(
      "Enquiry Tab",
      () => {
        loadPage()
      }
    )


  } // actual test cases
)