import { CenterBtns } from "../../page/Center";
import {
  bypassLogin,
  getPortalUrl,
  skipMSTunnelWarning,
} from "../../support/portal";

const base_url = getPortalUrl() + "/Center";
beforeEach(() => {
  bypassLogin(Cypress.env("auth").kavita, Cypress.env("token").kavita);
  skipMSTunnelWarning(base_url);
});

var centerbtn = new CenterBtns();
var payload = null;
before(() => {
  cy.fixture("frontend/Center/Courses").then((data) => {
    payload = data;
  });
});

describe("Center", () => {
  it("Student New Course and Payent", () => {
    payload.forEach((test_case) => {
      centerbtn.getStudent().click();
      centerbtn.CourseBtn().click();
      centerbtn.newCourseBtn().click();
      centerbtn.selectCourseBtnPaymentTab().click();
      centerbtn.fullstackCourse().click();
      centerbtn.normalCourse().click();
      centerbtn.moveCourseRight().click();
      centerbtn.selectedCourseSubmitBtn().click();
      centerbtn.selectPaymentMethod(test_case.payment_method).click();
      centerbtn.discountField(test_case.discount);
      centerbtn.discountReasonField(test_case.discount_reason);
      centerbtn.otherFeesField(test_case.other_fees);
      centerbtn.selectNoOfInstallments(test_case.no_of_installments).click();
      centerbtn.submitPaymentDetails().click();
      centerbtn.paymentDate(test_case.payment_date);
      centerbtn.paidAmount(test_case.paid_amount);
      centerbtn.selectPaymentModeWhilePayment(test_case.payment_mode).click();
      //centerbtn.submitPaymentBtn().click();
      centerbtn.cancelPaymentBtn().click();
    });
  });
});
