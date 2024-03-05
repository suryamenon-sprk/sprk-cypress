export class CenterBtns {

    getStudent(){
        return cy.get('#cell-student_name-8');
    }
    getStudentByIdAndName(){
        cy.get('.ag-body-viewport').scrollTo('bottom');
        cy.get('.ag-root-wrapper').should('be.visible');


        return cy.get('[row-id="74"]').find('[col-id="student_code"]').should('contain', 'S230100003').next('[aria-colindex="2"]');
    }
    selectPageSize(page_size){
        cy.get('#pageSizeSelect').click();
        return cy.get(`[data-value="${page_size}"]`);
    }
    CourseBtn(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(2)');
    }

    newCourseBtn(){
        return cy.get('.css-1hyrdio > .MuiButtonBase-root');
    }
    selectCourseBtnPaymentTab(){
        return cy.get('.MuiGrid-grid-md-4 > .MuiGrid-container > :nth-child(2)');
    }
    fullstackCourse(){
        return cy.get('.MuiList-root > :nth-child(35)');
    }

    normalCourse(){
        return cy.get('.MuiList-root > :nth-child(42)');
    }

    moveCourseRight(){
        return cy.get('[aria-label="move selected right"]');
    }

    selectedCourseSubmitBtn(){
        return cy.get('.css-iusmz7 > .MuiButtonBase-root');
      
      
    }
    selectPaymentMethod(payment_method){

        cy.get('#demo-simple-select').click();
      
        return cy.get(`li[data-value="${payment_method}"]`);
    }

    discountField(discount){
        return cy.get('input[name="discount"]').clear().type(`${discount}`);
        
    }
    discountReasonField(discount_reason){
        return cy.get('input[name="discount_reason"]').clear().type(`${discount_reason}`);
    }
    otherFeesField(other_fees){
        return cy.get('input[name="other_fees"]').clear().type(`${other_fees}`);
    }
    selectNoOfInstallments(No_of_Installments){
        cy.contains('p', 'No. of Installments')
        .next() 
        .click();
        return cy.get(`li[data-value="${No_of_Installments}"]`);
    }
    submitPaymentDetails(){
        return cy.contains('button', 'Submit');
    }

    paymentDate(payment_date){
        return cy.get('.MuiInputBase-root.MuiOutlinedInput-root input[type="date"]').clear().type(`${payment_date}`);
    }
    paidAmount(paid_amount){
        return cy.get('input[name="paid_amount"]').clear().type(`${paid_amount}`);
    }
    selectPaymentModeWhilePayment(payment_mode){
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click();
      
        return cy.get(`li[data-value="${payment_mode}"]`);
    }

    selectTransactionId(transaction_id){
        return cy.get('input[name="transaction_id"]').type(`${transaction_id}`);
    }

    selectChequeNo(cheque_number){
        return cy.get('input[name="cheque_number"]').type(`${cheque_number}`);
    }

    selectChequeDate(cheque_date){
        return cy.get('input[name="cheque_date"]').type(`${cheque_date}`);
    }
    selectChequeBankName(bank_name){
        return cy.get('input[name="bank_name"]').type(`${bank_name}`);
    }
    selectChequeBankBranch(branch_name){
        return cy.get('input[name="branch_name"]').type(`${branch_name}`);
    }

    selectAuthorizationNo(authorization_no){
        return cy.get('input[name="authorization_code"]').type(`${authorization_no}`);

    }

    submitPaymentBtn(){
        return cy.get('.MuiGrid-grid-sm-12 > .MuiButton-contained');
    }
    cancelPaymentBtn(){
        return cy.get('button.MuiButton-outlinedPrimary').contains('Cancel');
      
    }
    swalBtn(){
        return cy.get('.swal-button');
    }


    //Print receipt flow buttons

    receiptBtn(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(3)');
    }
    printIcon(){
        return cy.get('#cell-Action-76 > div > [aria-label="generatePrint"]')
    }
    printHistoryIcon(){
        return cy.get('#cell-Action-76 > div > [aria-label="historyprint"]')
    }
    cancelPrintHistoryBtn(){
        return cy.get('.css-75hnft > .MuiBox-root > .MuiButtonBase-root');
    }
    printBtn(){
        return cy.contains('Print');
        
    }
    cancelPrintBtn(){
        return cy.contains('Cancel');
        
    }
    // Reasssign Flow buttons

    batchBtn(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(5)');
    }
    reassignBtn(){
        cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('right');
        return cy.get('[col-id="reassign"] button').first().should('not.be.disabled');

    }
    selectCoursesToReassign(){
        cy.get('.MuiGrid-root.MuiGrid-item').eq(5).find('.MuiCheckbox-root input').click();
        cy.get('.MuiGrid-root.MuiGrid-item').eq(4).find('.MuiCheckbox-root input').click();
        return cy.get('.MuiGrid-root.MuiGrid-item').eq(6).find('.MuiCheckbox-root input');
      
    }
    nextBtn(){
        return cy.contains('button', 'Next')

    }
    selectBatchToReassign(){
        return cy.get('input[type="radio"]').eq(1);  
    }
    tpyeReasonToReassign(reassign_reason){
        return cy.get('textarea.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputMultiline.MuiInputBase-inputSizeSmall.css-12tl3rr-MuiInputBase-input-MuiOutlinedInput-input[placeholder="Reason.."][style="height: 20px; overflow: hidden;"]').type(reassign_reason);

    }
    reassignBatchBtn(){
        return  cy.contains('button','reassign batch')
    }
    cancelRassign(){
        return cy.get('.StudentSche_closeIconStyle__wHYT9 > .MuiButtonBase-root');
    }

    //Bookings Tab Flow buttons

    getBookingTab(){
        cy.get('.css-1m8u6xh-MuiListItem-root > .MuiButtonBase-root').click()
        return cy.contains('[role="button"]', 'Bookings')
    }
    getStudentInBookingsTab(){
        return cy.get('[row-id="0"] input[type="checkbox"]')
    }
    getStartDateInBookingTab(start_date){
        cy.contains('p','From').next()
        return cy.get('input[name="StartDate"]').type(`${start_date}`)

    }
    getEndDateInBookingTab(end_date){
        cy.contains('p','To').next()
        return cy.get('input[name="EndDate"]').type(`${end_date}`)

    }
    bookingClearDate(){
        return cy.get('button[type="button"]').contains('Clear Date');
    }
    typeTextInBookingSearch(textToSearch){
        return cy.get('input[placeholder="Search ....."]').type(textToSearch);
    }
    cancelBookingBtn(){
        return cy.contains('Cancel Booking Confirmation').scrollIntoView()

    }
    bookingCancellationReason(booking_cancel_reason){
        return cy.get('input[placeholder="Booking Cancellation Reason"]').type(booking_cancel_reason);
    }

    bookingCancellationCancelBtn(){
        return cy.get('button[type="button"][class*="outlined"]').contains('Cancel');

    }
    bookingCancellationYesBtn(){
        return cy.get('button[type="button"][class*="outlined"]').contains('Yes');    
    }
    

        // Collection Tab Buttons

    getCollectionTab(){
        cy.get('.css-1m8u6xh-MuiListItem-root > .MuiButtonBase-root').click()
        return cy.contains('[role="button"]', 'Collections')
    }

    collectionTabStartDate(collection_start_date){
        return cy.get('input[name="StartDate"]').type(collection_start_date)
        
    }
    collectionTabEndDate(collection_end_date){
        return cy.get('input[name="EndDate"]').type(collection_end_date)
        
    }
    collectionClearDate(){
        return cy.get('button[type="button"]').contains('Clear Date');
    }
    typeTextInCollectionSearch(textToSearch){
        return cy.get('input[placeholder="Search ....."]').type(textToSearch);
    }
    colectionsExportToExcelBtn(){
        return cy.get('button[type="button"]').contains('Export to Excel');    
    }
    colectionsExportToPDFBtn(){
        return cy.get('button[type="button"]').contains('Export to PDF');    
    }

    getStudentInCollectionTab(){
        return cy.get('div[row-id="5"] input[type="checkbox"]');
        
    }
    cancelReceiptAndInitateRefundBtn(){
        return cy.contains('button','cancel Receipt and initiate Refund')
    }
    collectionCancellationReason(cancellation_reason){
        return cy.get('input[placeholder="Cancellation Reason"]').type(cancellation_reason)
    }
    collectionCancellationCancelBtn(){
        return cy.get('button[type="button"]').contains('Cancel');

    }
    collectionCancellationYesBtn(){
        return cy.get('button[type="button"]').contains('Yes');    
    }
    // RBC Tab Buttons

    getRBCTab(){
        cy.get('.css-1m8u6xh-MuiListItem-root > .MuiButtonBase-root').click()
        return cy.contains('[role="button"]', 'RBC')
    }

    rbcTabStartDate(rbc_start_date){
        return cy.get('input[name="StartDate"]').type(rbc_start_date)
        
    }
    rbcTabEndDate(rbc_end_date){
        return cy.get('input[name="EndDate"]').type(rbc_end_date)
        
    }
    rbcClearDate(){
        return cy.get('button[type="button"]').contains('Clear Date');
    }
    typeTextInrbcSearch(textToSearch){
        return cy.get('input[placeholder="Search ....."]').type(textToSearch);
    }
    getStudentInRbcTab(){
        return cy.get('[row-id="0"] input[type="checkbox"]')
    }
    initiateRbcBtn(){
        return cy.contains('Initiate Reverse Booking Confirmation').scrollIntoView()

    }
    clickOnFirstCourseInRightSideInRbc(){
        return cy.get('.MuiList-root .MuiListItem-root input[type="checkbox"]').eq(0)
        
    }
    moveLeftInRbc(){
        return cy.get('button[aria-label="move selected left"][type="button"]');

    }
    clickOnAnyCourseOnLeftSideInRbc(){
        cy.get('input[aria-labelledby="transfer-list-item-6-label"]').click()
        return cy.get('input[aria-labelledby="transfer-list-item-4-label"]')
    }

    moveRightInRbc(){
        return cy.get('button[aria-label="move selected right"][type="button"]');
    }

    clickRbcPaymentTerm(){
        return cy.get('#demo-simple-select').eq(0)

    }
    selectRbcPaymentTerm(payment_term){
        return cy.get(`[data-value="${payment_term}"]`);

    }
    clickRbcNoOfInstallments(){
        return cy.get('.MuiFormControl-root .MuiSelect-select').eq(1);


    }
    selectRbcNoOfInstallments(no_of_installments){
        return cy.get(`[data-value="${no_of_installments}"]`);

    }
    typeReasonForRbc(rbc_reason){
        return cy.get('input[aria-invalid="false"][type="text"][class*="MuiInputBase-input"]').type(rbc_reason);

    }
    closeRbcModel(){
        return cy.get('[data-testid="CloseIcon"]');

    }
    submitRcbForm(){
        return cy.get('button[type="submit"]')
    }

}
