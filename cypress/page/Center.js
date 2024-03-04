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


}