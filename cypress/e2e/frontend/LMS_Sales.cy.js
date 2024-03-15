import { Action } from "../../page/LMS";
import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";



const base_url = getPortalUrl() + "/Lms"
beforeEach(() => {
  bypassLogin(
    Cypress.env("auth").umesh,
    Cypress.env("token").umesh
  )
  skipMSTunnelWarning(base_url)
});




var lmsBtn= new Action()



var payload = null;
before(() => {
  cy.fixture("frontend/LMS/enquiry")
    .then((data) => payload = data)
})



describe('lms',()=>{


/* 



    it("Create Enquiry- Admit flow",() => {
       
        payload.forEach((test_case)=>{
            lmsBtn.getlmsTab().click() 

            lmsBtn.getCreateButton().click()
            lmsBtn.typeStudentFirstName(test_case.student_firstname)
            lmsBtn.typeStudentLastName(test_case.student_lastname)
            lmsBtn.typeStudentPhone(test_case.primary_mobile)
            lmsBtn.typeStudentEmail(test_case.primary_email)
            //lmsBtn.closeCreateEnquiry().click()
            lmsBtn.getEnquiryCreationModalSubmitButtion().click()
            if(test_case.duplicate){
                lmsBtn.clickContinue()
            }
        
            lmsBtn.swalBtn().click()
            if(test_case.student_middlename){
                lmsBtn.typeStudentMiddleName(test_case.student_middlename)
            }
            if(test_case.secondary_mobile){
                lmsBtn.typeAlternateNumber(test_case.secondary_mobile)
            }
            if(test_case.secondary_email){
                lmsBtn.typeAlternateEmmail(test_case.secondary_email)
            }
            lmsBtn.selectStudentGender(test_case.gender).click()
            lmsBtn.typeStudentBirthdate(test_case.birth_date)


            lmsBtn.typeFlatNo(test_case.residence_no)
            lmsBtn.typeBuildingName(test_case.flat_house_building)
            lmsBtn.typeSampleArea(test_case.area_street_sector_village)
            lmsBtn.typeLandMark(test_case.landmark)
            lmsBtn.typePincode(test_case.pincode)
            lmsBtn.typeCity(test_case.town_city)
            lmsBtn.typeState(test_case.state)
            lmsBtn.typeCounntry(test_case.country)



            lmsBtn.typeCollegeName(test_case.college_name)
            lmsBtn.typeSoftwareKnown(test_case.software_known)
            lmsBtn.typeCareerRequirement(test_case.career_requirement)
            lmsBtn.selectOccupation(test_case.occupation).click()
            lmsBtn.selectQualification(test_case.qualification).click()
            lmsBtn.typeCourseHistory(test_case.course_history)


            if(test_case.action==='ADMIT'){
                lmsBtn.selectAction(test_case.action).click()
                lmsBtn.selectSource(test_case.heard_from).click()
                lmsBtn.selectNotVisited().click()
                lmsBtn.clickUpdate().click()
                //lmsBtn.swalBtn().click()


                lmsBtn.selectAddCourse().click()
                lmsBtn.selectCourse().click()
                lmsBtn.moveRight().click()
                lmsBtn.sumitSelectedCourse().click()
                lmsBtn.selectPaymentTerm(test_case.payment_term).click()
                lmsBtn.typeDiscount(test_case.discount)
                lmsBtn.typeDiscountReason(test_case.discount_reason)
                lmsBtn.selectNoOfInstallments(test_case.no_of_installments).click()
                lmsBtn.submitPaymentandCourse().click()
                lmsBtn.typePaymentDate(test_case.payment_date)
                lmsBtn.typePaidAmount(test_case.paid_amount)
                lmsBtn.selectModeOfPayment(test_case.mode_of_payment).click()
                lmsBtn.sumbitPaymentBtn().click()
                lmsBtn.swalBtn().click()
            

            }
        })
    })
*/

   it('Transfer Enquiry',()=>{
    lmsBtn.getlmsTab().click()
    lmsBtn.searchFilter("opened")
    lmsBtn.dateFilter("2024-01-01","2024-04-04").click()
    lmsBtn.selectStudentToTransfer().click()
    lmsBtn.selectAction("TRANSFER").click()
    lmsBtn.selectWhomToTransfer("Umesh Yelave").click()
    lmsBtn.clickUpdate().click()
    lmsBtn.swalBtn().click()
   })
})