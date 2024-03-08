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

*/
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




});
