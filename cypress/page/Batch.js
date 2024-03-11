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


  selectCancelBatchBtn(){
    return cy.contains('Cancel Batch')
  }
  typeCancelBatchReason(cancel_batch_reason){
    return cy.get('input[placeholder="Cancellation Reason"]').type(`${cancel_batch_reason}`)
  }
  cancelBatchCancellationbtn(){
    return cy.contains('button', 'No')
  }
  batchCancellationYesbtn(){
    return cy.contains('button', 'Yes')
  }





  selectHoldBatchBtn(){
    return cy.contains('Hold Batch')
  }
  typeHoldBatchReason(cancel_batch_reason){
    return cy.get('textarea[placeholder="Write here..."]').type(`${cancel_batch_reason}`)
  }
  cancelBatchHoldBtn(){
    return cy.contains('button', 'No')
  }
  batchHoldYesbtn(){
    return cy.contains('button', 'Yes')
  }


  selectAddSessionBtn(){
    return cy.contains('Add Session')
  }
  selectNoOfExtraSession(number_of_session){
    cy.get('div[id="mui-component-select-number_of_session"]').click()
    return cy.get(`li[data-value="${number_of_session}"]`)
  }


  clickOnSessionToViewModules(){
    return cy.get(':nth-child(1) > #panel1a-header > .MuiAccordionSummary-content > .Sessions_infoBox__83E9C > .Sessions_SummeryBox__7VQIC > .MuiTypography-root')
  }


  modulesBtnInBatchDetails(){
    return cy.get('.MuiTabs-flexContainer > :nth-child(2)')
  }

  searchInBatchDetailsTab(search_text){
    cy.get('.MuiFormControl-root > .MuiInputBase-root').type(`${search_text}`)
  }

  attendanceBtnInBatchDetails(){
    return cy.get('.MuiTabs-flexContainer > :nth-child(3)')
  }


  seeAttendanceModulewise(){
    return cy.get('.toggle_slider__TEyUx > .MuiTypography-root')
    }
  historyBtnInBatchDetails(){
    return cy.get('.MuiTabs-flexContainer > :nth-child(4)')
  }


  searchBatchFilter(search_text){
    return cy.get('.css-q2d6e6 > .MuiFormControl-root > .MuiInputBase-root').type(`${search_text}`)
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
  selectBatchFaculty(batch_faculty){
    batch_faculty.forEach((faculty)=>{
    cy.get('div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root').eq(2).click().type(`${faculty}`).type('{downarrow}').type('{enter}')
    cy.get('body').click()
  })
  }

  // Faculty Schedule Tab buttons
  getFacultyScheduleTab(){
    cy.get('.css-1m8u6xh-MuiListItem-root > .MuiButtonBase-root').click()
    return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiButtonBase-root')

}


  facultyScheduleTabSearch(type_text){
    return cy.get('input[type="search"]').type(type_text)
  }
  applyTodayFilterInFacultyScheduleTab(){
    return cy.get('.css-1gpicis-MuiButtonBase-root-MuiButton-root');
  }
  applyAllTimeFilterInFacultyScheduleTab(){
    return cy.get('.css-36i2xk-MuiButtonBase-root-MuiButton-root')
  }
  applyDateFilterInFacultyScheduleTab(start_date,end_date){
    cy.contains('button','Filter').click()
    cy.get('input[type="date"]').eq(0).type(start_date)
    cy.get('input[type="date"]').eq(1).type(end_date)
    return cy.contains('button', 'Apply')
    }

  goToPageNumber(page_number){
    cy.get('input[type="number"]').clear().type(page_number)
    return cy.contains('button','Go')
  }
  selectPageSize(page_size){
    cy.get('div[aria-labelledby="pageSizeSelect"]').click()
    return cy.get(`li[data-value="${page_size}"]`)
  }









    // Student Schedule Tab buttons
  getStudentScheduleTab(){
    cy.get('.css-1m8u6xh-MuiListItem-root > .MuiButtonBase-root').click()
    return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(3) > .MuiButtonBase-root')
  }
  applyStatusFilter(status){
    cy.contains('button','Filter').click()
    status.forEach((i)=>{
      cy.contains('p',`${i}`).click()
    })
    return cy.contains('button', 'Apply')

  }
  addStudentInStudentScheduleBtn(){
    //Click Student Code

    return cy.contains('button','Add Student')
  }




      //Session Request Tab buttons
  getSessionRequestTab(){
    cy.get('.css-1m8u6xh-MuiListItem-root > .MuiButtonBase-root').click()
    return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(4) > .MuiButtonBase-root')
  }














}
