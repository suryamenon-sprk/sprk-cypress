import { CenterBtns } from "../../page/Center";
import {
  bypassLogin,
  getPortalUrl,
  skipMSTunnelWarning,
} from "../../support/portal";

const base_url = getPortalUrl() + "/Center";
beforeEach(() => {
  bypassLogin(Cypress.env("auth").shiv, Cypress.env("token").shiv);
  console.log(Cypress.env("auth").shiv)
  console.log(Cypress.env("token").shiv)
  skipMSTunnelWarning(base_url);
});


var centerbtn = new CenterBtns();
var payload = null;
before(()=>{
    cy.fixture("frontend/Center/Courses").then((data)=>{
        payload = data
    })
})


describe('Center',()=>{
/*
    it('Edit Student Timings',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.clickEdit().click()
        centerbtn.clickAddSlot().click()
        centerbtn.clickDays(["SUNDAY","MONDAY","FRIDAY"])
        centerbtn.typeStartEndTimeAndReasonInAddTimings("12:00","17:00","College")
        centerbtn.saveChangesBtn().click()
        centerbtn.cancelChangesBtn().click()
    })



    it('Add course and payment Flow(cash)',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.CourseBtn().click();
        centerbtn.newCourseBtn().click();
        centerbtn.selectCourseBtnPaymentTab().click();
        centerbtn.fullstackCourse().click();
        centerbtn.normalCourse().click();
        centerbtn.moveCourseRight().click();
        centerbtn.selectedCourseSubmitBtn().click();
        centerbtn.selectPaymentMethod("INSTALLMENT").click();
        centerbtn.discountField("30000");
        centerbtn.discountReasonField("ABC");
        centerbtn.otherFeesField("1000");
        centerbtn.selectNoOfInstallments("6").click();
        centerbtn.submitPaymentDetails().click();
        centerbtn.paymentDate("2024-03-18");
        centerbtn.paidAmount("3000");
        centerbtn.selectPaymentModeWhilePayment("CASH").click();
        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();

    })



    
    it('Add course and payment Flow(upi)',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.CourseBtn().click();
        centerbtn.newCourseBtn().click();
        centerbtn.selectCourseBtnPaymentTab().click();
        centerbtn.fullstackCourse().click();
        centerbtn.normalCourse().click();
        centerbtn.moveCourseRight().click();
        centerbtn.selectedCourseSubmitBtn().click();
        centerbtn.selectPaymentMethod("INSTALLMENT").click();
        centerbtn.discountField("30000");
        centerbtn.discountReasonField("ABC");
        centerbtn.otherFeesField("1000");
        centerbtn.selectNoOfInstallments("6").click();
        centerbtn.submitPaymentDetails().click();
        centerbtn.paymentDate("2024-03-18");
        centerbtn.paidAmount("3000");
        centerbtn.selectPaymentModeWhilePayment("UPI").click();
        centerbtn.selectTransactionId("345678909678");

        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();

    })




    it('Add course and payment Flow(cheque)',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.CourseBtn().click();
        centerbtn.newCourseBtn().click();
        centerbtn.selectCourseBtnPaymentTab().click();
        centerbtn.fullstackCourse().click();
        centerbtn.normalCourse().click();
        centerbtn.moveCourseRight().click();
        centerbtn.selectedCourseSubmitBtn().click();
        centerbtn.selectPaymentMethod("INSTALLMENT").click();
        centerbtn.discountField("30000");
        centerbtn.discountReasonField("ABC");
        centerbtn.otherFeesField("1000");
        centerbtn.selectNoOfInstallments("6").click();
        centerbtn.submitPaymentDetails().click();
        centerbtn.paymentDate("2024-03-18");
        centerbtn.paidAmount("3000");
        centerbtn.selectPaymentModeWhilePayment("CHEQUE").click();
        centerbtn.selectChequeNo("123432")
        centerbtn.selectChequeDate("2024-04-04")
        centerbtn.selectChequeBankName("BOB")
        centerbtn.selectChequeBankBranch("Kalamboli")

        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();
    })



    it('Add course and payment Flow(debit card)',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.CourseBtn().click();
        centerbtn.newCourseBtn().click();
        centerbtn.selectCourseBtnPaymentTab().click();
        centerbtn.fullstackCourse().click();
        centerbtn.normalCourse().click();
        centerbtn.moveCourseRight().click();
        centerbtn.selectedCourseSubmitBtn().click();
        centerbtn.selectPaymentMethod("INSTALLMENT").click();
        centerbtn.discountField("30000");
        centerbtn.discountReasonField("ABC");
        centerbtn.otherFeesField("1000");
        centerbtn.selectNoOfInstallments("6").click();
        centerbtn.submitPaymentDetails().click();
        centerbtn.paymentDate("2024-03-18");
        centerbtn.paidAmount("3000");
        centerbtn.selectPaymentModeWhilePayment("DEBIT_CARD").click();
        centerbtn.selectAuthorizationNo("8989ABVJHSAS");


        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();
    })


    it('Add course and payment Flow(credit card)',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.CourseBtn().click();
        centerbtn.newCourseBtn().click();
        centerbtn.selectCourseBtnPaymentTab().click();
        centerbtn.fullstackCourse().click();
        centerbtn.normalCourse().click();
        centerbtn.moveCourseRight().click();
        centerbtn.selectedCourseSubmitBtn().click();
        centerbtn.selectPaymentMethod("INSTALLMENT").click();
        centerbtn.discountField("30000");
        centerbtn.discountReasonField("ABC");
        centerbtn.otherFeesField("1000");
        centerbtn.selectNoOfInstallments("6").click();
        centerbtn.submitPaymentDetails().click();
        centerbtn.paymentDate("2024-03-18");
        centerbtn.paidAmount("3000");
        centerbtn.selectPaymentModeWhilePayment("CREDIT_CARD").click();
        centerbtn.selectAuthorizationNo("8989ABVJHSAS");


        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();
    })


    it('Add course and payment Flow(net banking)',()=>{

        centerbtn.getEnrollmentTab().click()
        cy.wait(4000);

        centerbtn.getStudent().click()
        centerbtn.CourseBtn().click();
        centerbtn.newCourseBtn().click();
        centerbtn.selectCourseBtnPaymentTab().click();
        centerbtn.fullstackCourse().click();
        centerbtn.normalCourse().click();
        centerbtn.moveCourseRight().click();
        centerbtn.selectedCourseSubmitBtn().click();
        centerbtn.selectPaymentMethod("INSTALLMENT").click();
        centerbtn.discountField("30000");
        centerbtn.discountReasonField("ABC");
        centerbtn.otherFeesField("1000");
        centerbtn.selectNoOfInstallments("6").click();
        centerbtn.submitPaymentDetails().click();
        centerbtn.paymentDate("2024-03-18");
        centerbtn.paidAmount("3000");
        centerbtn.selectPaymentModeWhilePayment("NET_BANKING").click();
        centerbtn.selectTransactionId("456789876545678");


        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();
    })


 
   it('Payment Actions',()=>{

    centerbtn.getEnrollmentTab().click()
    cy.wait(2000);

    centerbtn.getStudent().click()
    centerbtn.CourseBtn().click();
    centerbtn.selectAnyCourseForFurtherPayment().click()


    //add installments
    centerbtn.clickActionsBtn().click()
    centerbtn.selectAddInstallmentAction().click()
    centerbtn.selectNoOfInstallments("10").click();
    centerbtn.updateBtn().click()
    // centerbtn.cancelBtn().click()
    centerbtn.swalBtn().click()

    // edit due date
    centerbtn.clickActionsBtn().click()
    centerbtn.selectEditDueDateAction().click()
    cy.get('.ag-body-horizontal-scroll-viewport').eq(1)
    .scrollTo('right');
    centerbtn.editDateOfAnyPayment("2024-03-03")
    //centerbtn.saveChangesBtn().click()
    centerbtn.closeRbcModel().eq(1).click()

    //edit all due dates
    centerbtn.clickActionsBtn().click()
    centerbtn.selectEditAllDueDateAction().click()
    centerbtn.typeDateInEditAllDueDate("2024-05-05")
    centerbtn.saveChangesBtn().click()
    centerbtn.closeRbcModel().eq(1).click()

   })

   */

   it('Pay Further installments',()=>{
    centerbtn.getEnrollmentTab().click()
    cy.wait(2000);

    centerbtn.getStudent().click()
    centerbtn.CourseBtn().click();
    centerbtn.selectAnyCourseForFurtherPayment().click()
    cy.wait(2000);

    centerbtn.clickPayButton()
    centerbtn.selectPaymentModeWhilePayment("CASH").click();
    centerbtn.submitPaymentBtn().click();
    centerbtn.swalBtn().click()



   })


















})
