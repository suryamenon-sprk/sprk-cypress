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



   it('Pay Further installments',()=>{
    centerbtn.getEnrollmentTab().click()
    cy.wait(2000);

    centerbtn.getStudent().click()
    centerbtn.CourseBtn().click();
    centerbtn.selectAnyCourseForFurtherPayment().click()
    cy.wait(2000);

    centerbtn.clickPayButton()
    cy.wait(2000);
    centerbtn.selectPaymentModeWhilePayment("CASH").click();
    centerbtn.submitPaymentBtn().click();
    centerbtn.swalBtn().click()
   })



   it('Action button check(Print and payment)',()=>{
    centerbtn.getEnrollmentTab().click()
    cy.wait(2000);

    centerbtn.getStudent().click()
    centerbtn.CourseBtn().click();
    //centerbtn.showPaymentInfo().click()
    centerbtn.printReceiptOfTotalCourse().click()
    centerbtn.printBtn().click()
    //centerbtn.cancelPrintBtn().click()
   })

   it('Print reciept flow',()=>{
    centerbtn.getEnrollmentTab().click()
    cy.wait(2000);

    centerbtn.getStudent().click();
    centerbtn.receiptBtn().click();
    //centerbtn.printIcon().click();
    centerbtn.printHistoryIcon().click();
    centerbtn.cancelPrintHistoryBtn().click();
    //centerbtn.printBtn().click();
    //centerbtn.cancelPrintBtn().click();

  });

  it('Bookings Tab Flow',()=>{
    centerbtn.getBookingTab().click();
    centerbtn.getStartDateInBookingTab("2024-02-02")
    centerbtn.getEndDateInBookingTab("2024-03-01")
    centerbtn.bookingClearDate().click()
    centerbtn.typeTextInBookingSearch("Rup")
    centerbtn.clickViewInBookingTab().click()
    centerbtn.cancelPrintBtn().click()
    
  })

  it('Booking Cancelation Flow',()=>{
    centerbtn.getBookingTab().click();
    centerbtn.getStudentInBookingsTab().click();
    centerbtn.cancelBookingBtn().click()
    centerbtn.bookingCancellationReason("XYZ")
    centerbtn.bookingCancellationCancelBtn().click()
    //centerbtn.bookingCancellationYesBtn().click()
  });


  it('Collection Tab and Export Flow',()=>{
    centerbtn.getCollectionTab().click()
    centerbtn.collectionTabStartDate("2024-01-02")
    centerbtn.collectionTabEndDate("2024-03-03")
    centerbtn.collectionClearDate().click()
    centerbtn.typeTextInCollectionSearch("Ru")
    //centerbtn.colectionsExportToExcelBtn().click();
    //centerbtn.colectionsExportToPDFBtn().click();
    cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('right');

    centerbtn.printHistoryIcon().click()
    //centerbtn.printBtn().click()

    centerbtn.cancelPrintHistoryBtn().click()
    centerbtn.printIcon().click()
    //centerbtn.printBtn().click()
    centerbtn.cancelPrintBtn().click()
  });


  it('Cancel collection and initate refund flow',()=>{
    centerbtn.getCollectionTab().click()
    centerbtn.getStudentInCollectionTab().click()
    centerbtn.cancelReceiptAndInitateRefundBtn().click()
    centerbtn.collectionCancellationReason("ABC");
    centerbtn.collectionCancellationCancelBtn().click()
    //centerbtn.collectionCancellationYesBtn().click()
  });

  it('RBC Table Filter ',()=>{
    centerbtn.getRBCTab().click()
    centerbtn.rbcTabStartDate("2024-01-02")
    centerbtn.rbcTabEndDate("2024-03-02")
    centerbtn.rbcClearDate().click()
    centerbtn.typeTextInCollectionSearch("Rupesh")
  })




  it('RBC Flow',()=>{
    centerbtn.getRBCTab().click()
    centerbtn.getStudentInRbcTab().click()
    centerbtn.initiateRbcBtn().click()
    // centerbtn.clickOnFirstCourseInRightSideInRbc().click()
    // centerbtn.moveLeftInRbc().click()
    centerbtn.clickOnAnyCourseOnLeftSideInRbc().click()
    centerbtn.moveRightInRbc().click()
    centerbtn.clickRbcPaymentTerm().click()
    centerbtn.selectRbcPaymentTerm("LUMPSUM").click()
    centerbtn.clickRbcNoOfInstallments().click()
    centerbtn.selectRbcNoOfInstallments("5").click()
    centerbtn.typeReasonForRbc("EFG")
    //centerbtn.closeRbcModel().click()
    centerbtn.submitRcbForm().click()
  })

  
  it('RBC History Tab',()=>{
    centerbtn.getRBCTab().click()
    centerbtn.getRbcHistoryTab().click()
    centerbtn.rbcTabStartDate("2024-01-02")
    centerbtn.rbcTabEndDate("2024-03-02")
    //centerbtn.rbcClearDate().click()
    centerbtn.typeTextInCollectionSearch("Rupesh")
  })
 




  it('Credit Hidtory Tab',()=>{
    centerbtn.getRBCTab().click()
    centerbtn.getCreditHistoryTab().click()
    centerbtn.rbcTabStartDate("2024-01-02")
    centerbtn.rbcTabEndDate("2024-03-02")
    //centerbtn.rbcClearDate().click()
    //centerbtn.typeTextInCollectionSearch("Rupesh")
    cy.wait(4000)
    centerbtn.creditPrintIcon().click()
    centerbtn.cancelPrintBtn().click()
    //centerbtn.printBtn().click()
    centerbtn.creditHistoryCredits().click()
    centerbtn.creditHistoryCreditscancel().click()
  })














})
