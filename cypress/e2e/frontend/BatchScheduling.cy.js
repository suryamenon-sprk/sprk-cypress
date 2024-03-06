import {
  bypassLogin,
  getPortalUrl,
  skipMSTunnelWarning,
} from "../../support/portal";
import { BatchBtn } from "../../page/Batch";

const base_url = getPortalUrl() + "/Batch_Scheduling";
beforeEach(() => {
  bypassLogin(Cypress.env("auth").kavita, Cypress.env("token").kavita);
  skipMSTunnelWarning(base_url);
});

var payload = null;

const batchBtn = new BatchBtn();

before(() => {
  cy.fixture("frontend/Batch/BatchPreview").then((data) => {
    payload = data;
  });
});

describe("Batch_Scheduling", () => {
  it("Create New BAtch", () => {
    payload.forEach((test_case) => {
      batchBtn.createBthBtn().click();
      batchBtn.openCourseList();
      batchBtn.selectCourse();
      batchBtn.fillStartDate(test_case.date);
      batchBtn.openFacultyList();
      batchBtn.selectFaculty();
      batchBtn.selectWeekDays(test_case.days_of_week);
      batchBtn.filingStartTime(test_case.start_time);
      batchBtn.filingEndtime(test_case.end_time);
      batchBtn.previewBtn();
      batchBtn.submitBtn();
      batchBtn.okbtn();
      batchBtn.backBth();
    });
  });
});
