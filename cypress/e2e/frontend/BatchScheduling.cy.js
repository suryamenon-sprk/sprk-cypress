import {
  bypassLogin,
  getPortalUrl,
  skipMSTunnelWarning,
} from "../../support/portal";
import { BatchBtn } from "../../page/Batch";


const base_url = getPortalUrl() + "/Batch_Scheduling";
beforeEach(() => {
  bypassLogin(Cypress.env("auth").kavita, Cypress.env("token").kavita);
  skipMSTunnelWarning(base_url);
});

var payload = null;
var payload_register = null;

const batchBtn = new BatchBtn();

before(() => {
  cy.fixture("frontend/Batch/BatchPreview").then((data) => {
    payload = data;
  });
});

before(() => {
  cy.fixture("frontend/Batch/EditBatchDetailsBody").then((data) => {
    payload_register = data;
  });
});


describe("Batch_Scheduling", () => {

  /*
  it("Create New BAtch", () => {
    payload.forEach((test_case) => {
      batchBtn.createBthBtn().click();
      batchBtn.openCourseList();
      batchBtn.selectCourse(test_case.course);
      
      batchBtn.fillStartDate(test_case.date);
    
      batchBtn.openFacultyList();
      batchBtn.selectFaculty();
      batchBtn.selectWeekDays(test_case.days_of_week);
      batchBtn.filingStartTime(test_case.start_time);
      batchBtn.filingEndtime(test_case.end_time);
      batchBtn.previewBtn();
      batchBtn.rescheduleBtn().click()
      if(test_case.new_date)
        batchBtn.typeRescheduleDate()
      if(test_case.new_start_time)
        batchBtn.typeRescheduleStartTime(test_case.new_start_time)
      if(test_case.new_end_time)
        batchBtn.typeRescheduleEndTime(test_case.new_end_time)
      batchBtn.saveRescheduleChangesBtn().click()


      batchBtn.submitBtn();
      batchBtn.okbtn().click()
     // batchBtn.backBth();
      batchBtn.selectStudent().click()
      batchBtn.moveRight().click()
      batchBtn.saveStudentAddBtn().click()
      batchBtn.okbtn().click()
      batchBtn.confirmBatchBtn().click()
      batchBtn.okbtn().click()
    });
  });

  


  it("Batch Actions Flow",()=>{


    batchBtn.selectOngoingBatches().click()
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectBatch().click()


    payload_register.forEach((test_case)=>{

    batchBtn.selectActionBtn().click()
    batchBtn.selectEditBatchDetailsBtn().click()
    if(test_case.days_of_week)
      batchBtn.selectWeekDays(test_case.days_of_week);
    if(test_case.start_time)
      batchBtn.filingStartTime(test_case.start_time);
    if(test_case.end_time)
      batchBtn.filingEndtime(test_case.end_time);
    if(test_case.preview)
      batchBtn.previewBtn();
    batchBtn.rescheduleBtn().click()
    if(test_case.new_date)
      batchBtn.typeRescheduleDate()
    if(test_case.new_start_time)
      batchBtn.typeRescheduleStartTime(test_case.new_start_time)
    if(test_case.new_end_time)
      batchBtn.typeRescheduleEndTime(test_case.new_end_time)
    batchBtn.saveRescheduleChangesBtn().click()
    //batchBtn.cancelRescheduleChangesBtn().click()
    batchBtn.submitBtn();
    batchBtn.okbtn().click()
    batchBtn.backBth();
  })
  })


  it('Action - Add student Flow ',()=>{
    batchBtn.selectOngoingBatches().click()
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectBatch().click()
    batchBtn.selectActionBtn().click()
    batchBtn.selectAddStudentBtn().click()
    batchBtn.addStudentSelectStudent().click()
    batchBtn.moveRight().click()
    batchBtn.saveStudentAddBtn().click()
    batchBtn.okbtn().click()
    batchBtn.addStudentCloseBtn().click()

  })


it('Cancel Batch Flow',()=>{
  
  batchBtn.selectTabularBatchView().click()
  batchBtn.selectOngoingBatches().click('topLeft')
  batchBtn.selectBatch().click()
  batchBtn.selectActionBtn().click()
  batchBtn.selectCancelBatchBtn().click()
  batchBtn.typeCancelBatchReason("XYZ")
  batchBtn.cancelBatchCancellationbtn().click()
  //batchBtn.batchCancellationYesbtn().click()


})



it('Hold Batch Flow',()=>{
  
  batchBtn.selectTabularBatchView().click()
  batchBtn.selectOngoingBatches().click('topLeft')
  batchBtn.selectBatch().click()
  batchBtn.selectActionBtn().click()
  batchBtn.selectHoldBatchBtn().click()
  batchBtn.typeHoldBatchReason("XYZ")
  batchBtn.cancelBatchHoldBtn().click()
  //batchBtn.batchHoldYesbtn().click()

})





// FOR FACULTY 

// it('add session Flow',()=>{
  
//   batchBtn.selectTabularBatchView().click()
//   batchBtn.selectOngoingBatches().click('topLeft')
//   batchBtn.selectBatch().click()
//   batchBtn.selectActionBtn().click()
//   batchBtn.selectAddSessionBtn().click()
//   batchBtn.selectNoOfExtraSession("3").click()


// })



it('Session Subtab in Batch Details',()=>{
   batchBtn.selectTabularBatchView().click()
   batchBtn.selectOngoingBatches().click('topLeft')
   batchBtn.selectBatch().click()
   batchBtn.clickOnSessionToViewModules().click()
})




it('Modules Subtab in Batch Details',()=>{
  batchBtn.selectTabularBatchView().click()
  batchBtn.selectOngoingBatches().click('topLeft')
  batchBtn.selectBatch().click()
  batchBtn.modulesBtnInBatchDetails().click()
  batchBtn.searchInBatchDetailsTab("Completed")
})


it('Attendance Subtab in Batch Details',()=>{
  batchBtn.selectTabularBatchView().click()
  batchBtn.selectOngoingBatches().click('topLeft')
  batchBtn.selectBatch().click()
  batchBtn.attendanceBtnInBatchDetails().click()
  batchBtn.searchInBatchDetailsTab("3")
  batchBtn.seeAttendanceModulewise().click()
  batchBtn.searchInBatchDetailsTab("Ab")
})

it('History Subtab in Batch Details',()=>{
  batchBtn.selectTabularBatchView().click()
  batchBtn.selectOngoingBatches().click('topLeft')
  batchBtn.selectBatch().click()
  batchBtn.historyBtnInBatchDetails().click()
 
 })


it('Batches Filter',()=>{
  batchBtn.selectTabularBatchView().click()
  batchBtn.selectBatchStatus(["ongoing","onhold","cancelled"])
  batchBtn.selectBatchCourse(["C Programming","Python"])
  batchBtn.selectBatchFaculty(["shiv"])

 })




it('Faculty Schedule Tab- all filters, search and pagination',()=>{
  batchBtn.getFacultyScheduleTab().click()
  batchBtn.facultyScheduleTabSearch("Hello")
  batchBtn.applyTodayFilterInFacultyScheduleTab().click()
  batchBtn.applyAllTimeFilterInFacultyScheduleTab().click()
  batchBtn.applyDateFilterInFacultyScheduleTab("2024-01-01","2024-03-08").click()
  batchBtn.goToPageNumber("7").click()
  batchBtn.selectPageSize("100").click()

})



it('Student Schedule Tab- all filters, search  pagination',()=>{
  batchBtn.getStudentScheduleTab().click()
  batchBtn.facultyScheduleTabSearch("Hello")
  batchBtn.applyDateFilterInFacultyScheduleTab("2024-01-01","2024-03-08").click()
  batchBtn.goToPageNumber("7").click()
  batchBtn.selectPageSize("100").click()
  batchBtn.applyStatusFilter(["PENDING","ACTIVE","ON LEAVE"]).click()

})
*/
it('Student Schedule Tab- Add Student Flow',()=>{
  batchBtn.getStudentScheduleTab().click()
  batchBtn.selectPageSize("100").click()
  batchBtn.addStudentInStudentScheduleBtn().click()
  batchBtn.okbtn().click()

})











/*
it('Session Tab- all filters, search and pagination',()=>{
  batchBtn.getSessionRequestTab().click()
  batchBtn.facultyScheduleTabSearch("Hello")
  batchBtn.applyDateFilterInFacultyScheduleTab("2024-01-01","2024-03-08").click()
  batchBtn.goToPageNumber("7").click()
  batchBtn.selectPageSize("100").click()
  batchBtn.applyStatusFilter(["Pending","Approved","Select All"]).click()

})
*/


















});
