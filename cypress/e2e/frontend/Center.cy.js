
import { CenterBtns } from "../../page/Center";
import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";



const base_url = getPortalUrl() + "/Center"
beforeEach(() => {
  bypassLogin(
    Cypress.env("auth").kavita,
    Cypress.env("token").kavita
  )
  skipMSTunnelWarning(base_url)
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

    it("Student New Course and Payent",()=>{
        payload.forEach((test_case) => {
        if(test_case.get_student){
          centerbtn.getStudent().click();
        }
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
        
        if (test_case.upi) {
            centerbtn.selectTransactionId(test_case.transaction_id);
        };

        if(test_case.cheque){
          centerbtn.selectChequeNo(test_case.cheque_number)
          centerbtn.selectChequeDate(test_case.cheque_date)
          centerbtn.selectChequeBankName(test_case.bank_name)
          centerbtn.selectChequeBankBranch(test_case.branch_name)
        };
        if(test_case.debit){
          centerbtn.selectAuthorizationNo(test_case.authorization_no);
        }
        if(test_case.credit){
          centerbtn.selectAuthorizationNo(test_case.authorization_no);
        }
        if(test_case.net_banking){
          centerbtn.selectTransactionId(test_case.transaction_id);
        }
      
        
        

        centerbtn.submitPaymentBtn().click();
        //centerbtn.cancelPaymentBtn().click()
        centerbtn.swalBtn().click();

    });

    });

  

    it('Print reciept flow',()=>{
      centerbtn.getStudent().click();
      centerbtn.receiptBtn().click();
      //centerbtn.printIcon().click();
      centerbtn.printHistoryIcon().click();
      centerbtn.cancelPrintHistoryBtn().click();
      //centerbtn.printBtn().click();
      //centerbtn.cancelPrintBtn().click();

    });
 

    it('Reassign Flow',()=>{
      centerbtn.selectPageSize(100).click();
      centerbtn.getStudentByIdAndName().click();
      centerbtn.batchBtn().click();
      centerbtn.reassignBtn().click();
      centerbtn.selectCoursesToReassign().click();
      centerbtn.nextBtn().click();
      centerbtn.selectBatchToReassign().click();
      centerbtn.tpyeReasonToReassign("Student want to learn again");
      //centerbtn.reassignBatchBtn().click();
      centerbtn.cancelRassign().click()
    })
  


    it('Bookings Tab Flow',()=>{
      centerbtn.getBookingTab().click();
      centerbtn.getStartDateInBookingTab("2024-02-02")
      centerbtn.getEndDateInBookingTab("2024-03-01")
      centerbtn.bookingClearDate().click()
      centerbtn.typeTextInBookingSearch("Rup")
      
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
      centerbtn.colectionsExportToExcelBtn().click();
      //centerbtn.colectionsExportToPDFBtn().click();

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

    */

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
      centerbtn.closeRbcModel().click()
      //centerbtn.submitRcbForm().click()
    })

});