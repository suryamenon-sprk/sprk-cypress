export class Action {

    getlmsTab(){
        return cy.get('[aria-label="Leads"]')
    }
    getCreateButton() {
        return cy.contains('button','Create')
    }

    getTransferButton() {
        return cy.get(buttonCSS).eq(1)
    }

    typeStudentFirstName(first_name) {
        return cy.get(`input[name="student_firstname"]`).type(first_name);
    }
    typeStudentLastName(last_name) {
        return cy.get(`input[name="student_lastname"]`).type(last_name);
    }
    typeStudentMiddleName(middle_name) {
        return cy.get(`input[name="student_middlename"]`).clear().type(middle_name);
    }
    typeStudentPhone(phone) {
        return cy.get(`input[name="primary_mobile"]`).type(phone);
    }
    typeStudentEmail(email) {
        return cy.get(`input[name="primary_email"]`).type(email);
    }

    EnquirySubmitBtn() {
        cy.get('body').then($body => {
            cy.log($body)
            if ($body.find('.Lms_createModal__cp4SA').length > 0) {
              cy.contains('Submit').click();
            } else {
              cy.log('Submit button does not exist');
            }
        })
    }

    clickContinue(){
        cy.wait(2000)
        cy.get('body').then($body => {
            cy.log($body)
            if ($body.find('.carousel-root').length > 0) {
                cy.get('.css-gg4vpm > :nth-child(2)').click();
            } else {
              cy.log('Continue button does not exist');
            }
          });
    }
    closeCreateEnquiry(){
        return cy.get('[data-testid="CloseIcon"]')
    }
    enquirySWalBtn(){

        cy.get('body').then($body => {
            cy.log($body)
            if ($body.find('.swal-modal').length > 0) {
                cy.get('.swal-button').click();
            } else {
              cy.log('Swal button does not exist');
            }
          });
    }
    swalBtn(){
        return cy.get('.swal-button')
    }

    typeStudentBirthdate(birth_date){
        cy.get('input[name="birth_date"]').clear().type(birth_date);

    }
    selectStudentGender(gender){
        cy.get('#demo-simple-select').click(); 
        return cy.get(`[data-value="${gender}"]`)
    }

    typeAlternateNumber(alt_number){
        cy.get('input[name="secondary_mobile"]').clear().type(alt_number);
    }

    typeAlternateEmmail(alt_email){
        cy.get('input[name="secondary_email"]').clear().type(alt_email);
    }






    typeFlatNo(flat_no){
        cy.get('input[name="residence_no"]').clear().type(flat_no);
    }

    typeBuildingName(building_name){
      cy.get('textarea[name="flat_house_building"]').clear().type(building_name);
    }

    typeSampleArea(sample_area){
      cy.get('input[name="area_street_sector_village"]').clear().type(sample_area);
    }

    typeLandMark(landmark){
      cy.get('textarea[name="landmark"]').clear().type(landmark);
    }

    typePincode(pincode){
      cy.get('input[name="pincode"]').clear().type(pincode);
    }

    typeCounntry(country){
      cy.get('.MuiFormControl-root p:contains("Country") + .MuiAutocomplete-root input.MuiInputBase-input').type(country);
    }

    typeState(state){
      cy.get('.MuiFormControl-root p:contains("State") + .MuiAutocomplete-root input.MuiInputBase-input').type(state);
    }
    
    typeCity(city){
      cy.get('.MuiFormControl-root p:contains("City/Town") + .MuiAutocomplete-root input.MuiInputBase-input').clear().type(city);
    }




    typeCollegeName(college_name){
        cy.get('input[name="college_name"]').clear().type(college_name);
    }

    selectQualification(qualification){
        cy.contains('p', 'Qualification:')
        .next()
        .find('#demo-simple-select')
        .click()
        return cy.contains(qualification)
    }

    selectOccupation(occupation){
        cy.contains('p', 'Occupation:')
        .next()
        .find('#demo-simple-select') 
        .click()
        return cy.get(`li[data-value="${occupation}"]`)
    }

    typeCareerRequirement(carer_requirement){
        cy.get('input[id="tags-outlined"]').eq(0).clear().type(carer_requirement);
    }
    typeSoftwareKnown(software_known){
        cy.get('input[id="tags-outlined"]').eq(1).clear().type(software_known);
    }

    typeCourseHistory(course_history){
        cy.get('input[name="course_history"]').type(course_history)
    }



    
    selectAction(action){
        cy.contains('p', 'Action') 
        .next() 
        .find('#demo-simple-select') 
        .click(); 
        return cy.contains(action)
    }

    selectSource(source){
        cy.contains('p', 'Source:')
        .next() 
        .find('#demo-simple-select') 
        .click()
        return cy.get(`li[data-value="${source}"]`)

    }
    
    selectNotVisited(){
        cy.contains('p', 'Visited:')
        .next() 
        .find('#demo-simple-select') 
        .click()
        return cy.get('li[data-value="false"]')
    }

    clickUpdate(){
        return cy.contains('Update');
    }



    selectAddCourse(){        
        return cy.get('svg[data-testid="AddIcon"]')
    }

    selectCourse(){
        return cy.contains('.MuiListItemText-primary', 'Basic MS-Office')
    }   
    moveRight(){
        return cy.get('[aria-label="move selected right"]')
    }
    sumitSelectedCourse(){
        return cy.get('.css-iusmz7 > .MuiButtonBase-root')
    }
    selectPaymentTerm(payment_term){
        cy.get('.MuiGrid-grid-md-4 > .MuiGrid-container > :nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click();
        return cy.get(`li[data-value="${payment_term}"]`)
    }
    typeDiscount(discount){
        return cy.get('input[name="discount"]').type(discount);
    }
    typeDiscountReason(discount_reason){
        return cy.get('input[name="discount_reason"]').type(discount_reason);
    }

    selectNoOfInstallments(no_of_installments){
        cy.contains('p', 'No. of Installments')
        .next()
        .click();
        return cy.get(`li[data-value="${no_of_installments}"]`)
    }

    submitPaymentandCourse(){
        return cy.contains('button', 'Submit')
    }
    typePaymentDate(payment_date){
        return cy.get('input[type="date"]').eq(1).clear().type(payment_date);
    }
    typePaidAmount(paid_amount){
        return cy.get('input[name="paid_amount"]').clear().type(paid_amount)
    }

    selectModeOfPayment(mode_of_payment){
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click()
        return cy.get(`li[data-value="${mode_of_payment}"]`)
    }

    sumbitPaymentBtn(){
        return cy.get('.MuiGrid-grid-sm-12 > .MuiButton-contained')
    }
    goBackToCenter(){
        return cy.get(':nth-child(1) > a')
    }


    searchFilter(text_search){
        return cy.get('input[type="search"]').type(text_search)
    }
    dateFilter(from,to){
        cy.contains('button','Filter').click()
        cy.get('input[type="date"]').eq(0).type(from)
        cy.get('input[type="date"]').eq(1).type(to)
        return cy.contains('button','Apply')
    }
    selectEmployeeInLmsFilter(employee_names){
        cy.contains('button','Filter').click()
        employee_names.forEach((employee_name)=>{
            cy.contains('p', `${employee_name}`) 
            .prev() 
            .find('input[type="checkbox"]') 
            .check()
        })
        return cy.contains('button','Apply')

    }
    selectStudentToTransfer(){
        return cy.get('[data-testid="EditIcon"]').eq(0)

    }

    selectWhomToTransfer(transfer_to){
        cy.contains('p', 'TRANSFER To') 
        .next() 
        .find('#demo-simple-select') 
        .click(); 
        return cy.contains(transfer_to)
    }



    followUpDate(date){
        cy.get('input[type="date"]').eq(1).type(date)
    }
    followUpTime(time){
        cy.get('input[type="time"]').eq(0).type(time)
    }

    selectFollowUpType(followup_type){
        cy.contains('p', 'Type') 
        .next() 
        .find('#demo-simple-select') 
        .click(); 
        return cy.contains(followup_type)
    }
    typeComment(comment){
        cy.get('textarea[name="comment"]').type(comment)

    }
    cancelBtn(){
        return cy.contains('button', 'Cancel')
    }

    typeDiscardReason(discard_reason){
        cy.get('input[name="discard_reason"]').type(discard_reason)
    }

    discardBtn(){
        return cy.contains('button','Discard')
    }
    finalDiscardBtn(){
        return cy.get('.Lms_buttonBox__wpsIJ > .MuiButtonBase-root')
    }
    transferBtn(){
        return cy.contains('button','Transfer')
    }
    finalTransferBtn(){
        return  cy.get('.Lms_buttonBox__wpsIJ > .MuiButtonBase-root')
      
    }
    deleteBtn(){
        return cy.contains('button','Delete')
    }
    finalDeleteBtn(){
        return  cy.contains('div.Lms_buttonBox__sLJ4u button', 'Delete')
    }
    yesDeleteBtn(){
        return cy.contains('button','Yes, Delete')
    }
    cancelDeleteBtn(){
        return cy.contains('button','No, Cancel')
    }


    selectStudentRow(){
        return cy.get('div[row-id="0"]').next().find('input[type="checkbox"]')
    }
    discardReasonForDirectDiscard(discard_reason){
        return cy.get('input[type="text"]').eq(1).type(discard_reason)
    }


    selectWhomToTransferInLms(transfer_to){
        cy.get('[role="combobox"]').eq(1) 
        .click(); 
        return cy.contains('li',transfer_to)
    }

    selectFollowUpView(){
        return cy.contains('p','Follow Ups')
    }
    typeFollowFilterStartEndDate(start_date,end_date){
        cy.get('input[name="followStartDate"]').type(start_date)
        cy.get('input[name="followEndDate"]').type(end_date)
    }
    clearBtn(){
        return cy.contains('button','Clear')
    }
    closeFollowUpLeads(){
        return cy.get('[data-testid="CloseIcon"]')
    }

}


