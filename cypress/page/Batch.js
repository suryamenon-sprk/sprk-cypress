export class BatchBtn {
  // Create Employee Tab buttons

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

  openFacultyList() {
    return cy.get("#faculty").click();
  }
  selectFaculty() {
    return cy.get(".MuiButtonBase-root.MuiMenuItem-root").eq(3).click();
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

  selectOngoingBatches(){
  cy.get('div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root').eq(0).click().type('ongoing').type('{downarrow}').type('{enter}')
  return cy.get('body')
  }
  selectTabularBatchView(){
    return cy.get('button.MuiToggleButtonGroup-middleButton');

  
  }
  selectBatch(){
    return cy.get('div[row-id="0"]').find('div[aria-colindex="1"]')
  
  }

  selectActionBtn(){
    return cy.contains('button','Action')
  }
  selectEditBatchDetailsBtn(){
    return cy.contains('Edit Batch Details')
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

  selectAddStudentBtn(){
    return cy.contains('Add Student')
  }

  addStudentCloseBtn(){
    
    return cy.get('svg[data-testid="CloseIcon"]')


  }
  addStudentSelectStudent(){
    return cy.get('.MuiGrid-spacing-xs-2 > :nth-child(1) > .MuiPaper-root > .MuiList-root > :nth-child(2)')

  }


}
