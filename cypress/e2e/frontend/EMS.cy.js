import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";
import { EMSBtns } from "../../page/EMS";


const base_url = getPortalUrl() + "/EMS"
beforeEach(() => {
  bypassLogin(
    Cypress.env("auth").kavita,
    Cypress.env("token").kavita
  )
  skipMSTunnelWarning(base_url)
});

var emsbtn = new EMSBtns();
var payload= null;
var emp_body=null;

before(() => {

    cy.fixture("frontend/EMS/EmployeeBody").then((data) => {
        payload = data
    })

})

before(()=>{
    cy.fixture('frontend/EMS/EmployeeEditBody').then((data)=>{
    emp_body=data})
})


describe('EMS',()=>{
/*
    //Employee Request flow
    it('Add - Employee', () => {
        emsbtn.createEmpBtn().click()
        payload.forEach((test_case) => {

            
            emsbtn.empFirstName(test_case.firstname)
            emsbtn.empLastName(test_case.lastname)
            emsbtn.empPhone(test_case.phone)
            emsbtn.empEmail(test_case.email)
            emsbtn.selectAuthorities(test_case.authorities).click()
            cy.get('body').click();  
            emsbtn.fillJoiningDate(test_case.joining_date)
            emsbtn.nextBtn().click()


            //emsbtn.clickLabel(test_case.permission).click()
            emsbtn.backBtn().click()
            
        
        })
    })

*/

    it('Update Employee Details',()=>{

        emsbtn.selectEmployee().click()
        emsbtn.editEmpDetails().click()

        emp_body.forEach((test_case)=>{

            emsbtn.empUpdateFirstName(test_case.firstname)
            emsbtn.empUpdateLastName(test_case.lastname)
            emsbtn.empUpdateMiddleName(test_case.middlename)
            emsbtn.empBirthdate(test_case.birth_date)
            emsbtn.empUpdatePhone(test_case.phone)
            emsbtn.empGender(test_case.gender).click()
            emsbtn.empUpdateEmail(test_case.email)
            emsbtn.empBloodGroup(test_case.blood_group).click()
            emsbtn.empMaritalStatus(test_case.marital_status).click()
            emsbtn.empNationality(test_case.nationality).click()
            emsbtn.submitEmpUpdate().click()
            emsbtn.swalBtn().click()

    })
    })










/*


    it("Employee Activity Flow",()=>{
        emsbtn.selectEmployee().click()
        emsbtn.activityBtn().click()
        emsbtn.typeStartDate("2024-02-01")
        emsbtn.typeEndDate("2024-03-01")
        emsbtn.clearDate().click()     //   clear dates
    })
   it('Employee Timings',()=>{
        emsbtn.selectEmployee().click()
        emsbtn.timingsBtn().click()
        emsbtn.empInTime("05:00")
        emsbtn.empOutTime("20:00")
        var workingDays = ["SUN","MON","FRI" ]
        emsbtn.clickEmpWorkingDays(workingDays)
        emsbtn.typeNoOfEmpLeaves("999")
        emsbtn.empTimmingSaveBtn().click()
   })

   it('Employee Permissions',()=>{
    emsbtn.selectEmployee().click()
    emsbtn.permissionsBtn().click()
    emsbtn.lmsBtn().click()
    //emsbtn.getFirstCheckboxInPermissionsTable().click()
    emsbtn.permissionSaveChangesBtn().click()
    emsbtn.swalBtn().click()

    emsbtn.centerBtn().click()
    //emsbtn.getFirstCheckboxInPermissionsTable().click()
    emsbtn.permissionSaveChangesBtn().click()
    emsbtn.swalBtn().click()

    emsbtn.emsBtn().click()
    //emsbtn.getFirstCheckboxInPermissionsTable().click()
    emsbtn.permissionSaveChangesBtn().click()
    emsbtn.swalBtn().click()

    emsbtn.academicsBtn().click()
    //emsbtn.getFirstCheckboxInPermissionsTable().click()
    emsbtn.permissionSaveChangesBtn().click()
    emsbtn.swalBtn().click()

    emsbtn.batchSchedulingBtn().click()
    //emsbtn.getFirstCheckboxInPermissionsTable().click()
    emsbtn.permissionSaveChangesBtn().click()
    emsbtn.swalBtn().click()



})
   */

})
