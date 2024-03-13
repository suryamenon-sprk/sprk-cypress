import { BatchBtn } from "../../page/Batch";
import { AcademicsBtn } from "../../page/academics";

import {
    bypassLogin,
    getPortalUrl,
    skipMSTunnelWarning,
  } from "../../support/portal";
  
  
  
const base_url = getPortalUrl() + "/Academics";
 beforeEach(() => {
    bypassLogin(Cypress.env("auth").pranav, Cypress.env("token").pranav);
    skipMSTunnelWarning(base_url);
});

var academicsBtn =new AcademicsBtn();
var batchBtn = new BatchBtn();

var payload = null;
var payload_register = null;



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
  



describe('Academics',()=>{
/*


    it("Dashboard",()=>{
    academicsBtn.getDashboardBtn().click()




    })




    it("Academics- Batch creation Flow",()=>{

        academicsBtn.getMyBatches().click()
        payload.forEach((test_case)=>{

        academicsBtn.createBthBtn().click()
        academicsBtn.openCourseList().click()
        academicsBtn.selectCourse(test_case.course)
        academicsBtn.fillStartDate(test_case.date)
        academicsBtn.selectWeekDays(test_case.days_of_week)
        academicsBtn.filingStartTime(test_case.start_time)
        academicsBtn.filingEndtime(test_case.end_time)
        academicsBtn.previewBtn().click()
        academicsBtn.rescheduleBtn().click()
        if(test_case.new_date)
            academicsBtn.typeRescheduleDate()
        if(test_case.new_start_time)
            academicsBtn.typeRescheduleStartTime(test_case.new_start_time)
        if(test_case.new_end_time)
            academicsBtn.typeRescheduleEndTime(test_case.new_end_time)
        academicsBtn.saveRescheduleChangesBtn().click()
        academicsBtn.submitBtn();
        academicsBtn.okbtn().click()
        academicsBtn.selectStudent().click()
        academicsBtn.moveRight().click()
        academicsBtn.saveStudentAddBtn().click()
        academicsBtn.okbtn().click()
        academicsBtn.confirmBatchBtn().click()
        academicsBtn.okbtn().click()
 

        

            })
    
        })


it('Adademics filters',()=>{
    academicsBtn.getMyBatches().click()

    academicsBtn.selectTabularBatchView().click()
    academicsBtn.selectBatchStatus(["ongoing","booked"])
    academicsBtn.selectBatchCourse(["C Programming","Python"])
    academicsBtn.searchFilter("pranav")
    academicsBtn.goToPageNumber("7").click()
    academicsBtn.selectPageSize("100").click()

})


it('Cancel Batch Flow',()=>{
  
    academicsBtn.getMyBatches().click()
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectOngoingBatches().click('topLeft')
    batchBtn.selectBatch().click()
    batchBtn.selectActionBtn().click()
    batchBtn.selectCancelBatchBtn().click()
    batchBtn.typeCancelBatchReason("XYZ")
    batchBtn.cancelBatchCancellationbtn().click()
    //batchBtn.batchCancellationYesbtn().click()
  
  
  })
  



  it('Action - Add student Flow ',()=>{
    academicsBtn.getMyBatches().click()
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


  

  it("Batch Actions Flow",()=>{

    academicsBtn.getMyBatches().click()    
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






it('Hold Batch Flow',()=>{
    academicsBtn.getMyBatches().click()    
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectOngoingBatches().click('topLeft')
    batchBtn.selectBatch().click()
    batchBtn.selectActionBtn().click()
    batchBtn.selectHoldBatchBtn().click()
    batchBtn.typeHoldBatchReason("XYZ")
    batchBtn.cancelBatchHoldBtn().click()
    //batchBtn.batchHoldYesbtn().click()
  
  })
  


  it('Add Session Flow',()=>{

    academicsBtn.getMyBatches().click()    
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectOngoingBatches().click('topLeft')
    batchBtn.selectBatch().click()
    batchBtn.selectActionBtn().click()
    academicsBtn.addSessionBtn().click()
    academicsBtn.selectNoOfSessions("4").click()
    academicsBtn.typeAddSessionReason("Student Demand")
    academicsBtn.sendRequestBtn().click()
    batchBtn.okbtn().click()


  })


  it('Session Subtab in Batch Details',()=>{
    academicsBtn.getMyBatches().click()    

    batchBtn.selectTabularBatchView().click()
    batchBtn.selectOngoingBatches().click('topLeft')
    batchBtn.selectBatch().click()
    batchBtn.clickOnSessionToViewModules().click()
 })
 
 
 
 
 it('Modules Subtab in Batch Details',()=>{
    academicsBtn.getMyBatches().click()    

   batchBtn.selectTabularBatchView().click()
   
   batchBtn.selectOngoingBatches().click('topLeft')
   batchBtn.selectBatch().click()
   batchBtn.modulesBtnInBatchDetails().click()
   batchBtn.searchInBatchDetailsTab("Completed")
 })
 
 
 it('Attendance Subtab in Batch Details',()=>{
    academicsBtn.getMyBatches().click()    

   batchBtn.selectTabularBatchView().click()
   batchBtn.selectOngoingBatches().click('topLeft')
   batchBtn.selectBatch().click()
   batchBtn.attendanceBtnInBatchDetails().click()
   batchBtn.searchInBatchDetailsTab("3")
   batchBtn.seeAttendanceModulewise().click()
   batchBtn.searchInBatchDetailsTab("Ab")
 })
 
 it('History Subtab in Batch Details',()=>{
    academicsBtn.getMyBatches().click()    

   batchBtn.selectTabularBatchView().click()
   batchBtn.selectOngoingBatches().click('topLeft')
   batchBtn.selectBatch().click()
   batchBtn.historyBtnInBatchDetails().click()
  
  })
 
 

  it('Mark Attendance- with marking attendance and module',()=>{
    academicsBtn.getMyBatches().click()    
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectOngoingBatches().click('topLeft')
    batchBtn.selectBatch().click()
    for( let i = 1; i<10;i++){
        academicsBtn.getSession(i).click()
        academicsBtn.clickAttendenceCheckbox().click()
        academicsBtn.nextBtn().click()
        academicsBtn.completedModuleBtn(i).click()
        academicsBtn.pendingModuleBtn(i+1).click()
        academicsBtn.submitAttendanceBtn().click()
        batchBtn.okbtn().click()

    }

  })



  it('Mark Attendance- without marking attendance',()=>{
    academicsBtn.getMyBatches().click()    
    batchBtn.selectTabularBatchView().click()
    batchBtn.selectOngoingBatches().click('topLeft')
    batchBtn.selectBatch().click()

    academicsBtn.getSession(10).click()
    academicsBtn.nextBtn().click()
    academicsBtn.addRemark("Holiday")
    academicsBtn.submitAttendanceBtn().click()
    batchBtn.okbtn().click()


  })

   */




  it('Session Request Tab- all filters, search, pagination and withdraw Request',()=>{
    academicsBtn.getMyRequest().click()
    batchBtn.facultyScheduleTabSearch("BTH")
    batchBtn.applyDateFilterInFacultyScheduleTab("2024-01-01","2024-04-08").click()
    batchBtn.goToPageNumber("7").click()
    batchBtn.selectPageSize("100").click()
    batchBtn.applyStatusFilter(["Pending","Approved","Select All"]).click()
    academicsBtn.withdrawRequestBtn().click()
    batchBtn.okbtn().click()
  
  })









 




})