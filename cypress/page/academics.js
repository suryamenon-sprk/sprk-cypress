export class AcademicsBtn{

    getDashboardBtn(){
        cy.get('.MuiListItem-root > .MuiButtonBase-root').click()
        return cy.get('[aria-label="Dashboard"]')
    }
    getMyBatches(){
        cy.get('.MuiListItem-root > .MuiButtonBase-root').eq(0).click()
        return cy.get('[aria-label="My Batches"]')
    }




    
  createBthBtn() {
    return cy.get(".batch_create_btn");
  }

  openCourseList() {
    return cy.get("#course").click();
  }
  selectCourse(course) {
    return cy.contains('p', 'Select Course:').next().find('input[type="text"]').type(course).type('{downarrow}').type('{enter}'); 
  }

  fillStartDate(start_date) {
    cy.get('input[name="date"]').click();
    return cy.get('[name="date"]').clear().type(start_date);
  }


  selectWeekDays(weekdays) {
    return weekdays.forEach((day) => {
      cy.get(`.button-${day}`).click();
    });
  }

  filingStartTime(startTime) {
    cy.get('input[name="start_time"]').click();
    return cy.get('[name = "start_time"]').clear().type(`${startTime}`);
  }

  filingEndtime(endTime) {
    cy.get('input[name="end_time"]').click();
    return cy.get('[name = "end_time"]').clear().type(`${endTime}`);
  }

  previewBtn() {
    return cy.get("#preview-batch").click();
  }
  rescheduleBtn(){
    return cy.get('.session-box').eq(1).contains('Reschedule')

  }
  typeRescheduleDate(new_date){
    return cy.get('input[name="newDate"]').click().type(new_date);

  }
  typeRescheduleStartTime(new_start_time){
    return cy.get('input[name="newStartTime"]').click().type(new_start_time);

  }
  typeRescheduleEndTime(new_end_time){
    return cy.get('input[name="newEndTime"]').click().type(new_end_time);

  }

  saveRescheduleChangesBtn(){
    return cy.contains('button','Save Changes')

  }
  cancelRescheduleChangesBtn(){
    return cy.contains('button','Cancel')

  }

  submitBtn() {
    return cy.get("#submit-btn").click();
  }

  okbtn() {
    return cy.get(".swal-button.swal-button--confirm");
  }
  backBth() {
    return cy.get("#back-btn-createBatch").click();
  }

  selectStudent(){
    return cy.get('.MuiButtonBase-root.MuiListItem-root').eq(1)

  }
  moveRight(){
    return cy.get('button[aria-label="move selected right"]');

  }
  saveStudentAddBtn(){
    return cy.contains('Save Changes')

  }
  confirmBatchBtn(){
    return cy.contains('Confirm Batch')
  }


  addSessionBtn(){
    return cy.contains('Add Session')
  }

  selectNoOfSessions(no_of_sessions){
    cy.get('[aria-labelledby="mui-component-select-number_of_session"]').click()
    return cy.get(`[data-value="${no_of_sessions}"]`)
  }
  typeAddSessionReason(reason){
    return cy.get('textarea[name="comment"]').type(reason)
  }
  sendRequestBtn(){
    return cy.contains('button','Send Request')
  }


//Filters



searchFilter(text_to_search){
    return cy.get('input[type="search"]').type(text_to_search)
}
selectBatchStatus(batch_status){
    batch_status.forEach((batch)=>{
    cy.get('div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root').eq(0).click().type(`${batch}`).type('{downarrow}').type('{enter}')
    cy.get('body').click()
  })
  }

  selectBatchCourse(batch_course){
    batch_course.forEach((course)=>{
    cy.get('div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root').eq(1).click().type(`${course}`).type('{downarrow}').type('{enter}')
    cy.get('body').click()
  })
  }

  selectTabularBatchView(){
    return cy.get('button.MuiToggleButtonGroup-middleButton');
  
  }

  goToPageNumber(page_number){
    cy.get('input[type="number"]').clear().type(page_number)
    return cy.contains('button','Go')
  }
  selectPageSize(page_size){
    cy.get('div[aria-labelledby="pageSizeSelect"]').click()
    return cy.get(`li[data-value="${page_size}"]`)
  }





//mark attendance

  getSession(session_number){
    return cy.contains('p', `Session ${session_number}`)
  }
  clickAttendenceCheckbox(){
    return cy.get('input[type="CheckBox"]').eq(0)
  }
  
  nextBtn(){
    return cy.contains('button','Next')
  }
  completedModuleBtn(i){
    return cy.get('[label="Completed"]').eq(i)
  }
  pendingModuleBtn(i){
    return cy.get('[label="In Progress"]').eq(i+1)
  }

  submitAttendanceBtn(){
    return cy.contains('button','Submit')
  }
  addRemark(remark){
    return cy.get('textarea[placeholder="enter remark "]').type(remark)
  }

//My Request Btn

getMyRequest(){
    cy.get('.MuiListItem-root > .MuiButtonBase-root').eq(0).click()
    return cy.get('.MuiList-root > :nth-child(3) > .MuiButtonBase-root')
}
withdrawRequestBtn(){
    return cy.contains('button','Withdraw')
}




}