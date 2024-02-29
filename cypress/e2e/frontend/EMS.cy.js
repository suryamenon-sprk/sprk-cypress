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


before(() => {

    cy.fixture("frontend/EMS/EmployeeBody").then((data) => {
        payload = data
    })

})


describe('EMS',()=>{

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


    it("Employee Activity Flow",()=>{
        emsbtn.selectEmployee().click()
        emsbtn.activityBtn().click()
        emsbtn.typeStartDate("2024-02-01")
        emsbtn.typeEndDate("2024-03-01")
        emsbtn.clearDate().click()     //   clear dates
    })

})
