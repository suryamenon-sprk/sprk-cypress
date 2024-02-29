export class CenterBtns {

    getStudent(){
        return cy.get('#cell-student_name-8');
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
        .next() // Move to the next sibling element, which is the div containing the number of installments
        .click();
        return cy.get(`li[data-value="${No_of_Installments}"]`);
    }
    submitPaymentDetails(){
        return cy.contains('button', 'Submit');
    }

    paymentDate(payment_date){
        return cy.get('input[id=":r11:"]').clear().type(`${payment_date}`);
    }
    paidAmount(paid_amount){
        return cy.get('input[name="paid_amount"]').clear().type(`${paid_amount}`);
    }
    selectPaymentModeWhilePayment(payment_mode){
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click();
      
        return cy.get(`li[data-value="${payment_mode}"]`);
    }
    submitPaymentBtn(){
        return cy.get('.MuiGrid-grid-sm-12 > .MuiButton-contained');
    }
    cancelPaymentBtn(){
        return cy.get('button.MuiButton-outlinedPrimary').contains('Cancel');
      
    }


}