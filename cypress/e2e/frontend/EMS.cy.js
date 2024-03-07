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
var emp_full_body=null;


before(() => {

    cy.fixture("frontend/EMS/EmployeeBody").then((data) => {
        payload = data
    })

})

before(()=>{
    cy.fixture('frontend/EMS/EmployeeEditBody').then((data)=>{
    emp_body=data})
})

before(()=>{
    cy.fixture('frontend/EMS/EmployeeFullDetailsBody').then((data)=>{
    emp_full_body=data})
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



    it('Update Employee Details',()=>{

        emsbtn.selectEmployee().click()
        emsbtn.editEmpDetails().click()

        emp_body.forEach((test_case)=>{

           
            if (test_case.firstname)
                emsbtn.empUpdateFirstName(test_case.firstname)

            if (test_case.lastname)
                emsbtn.empUpdateLastName(test_case.lastname)

            if (test_case.middlename)
                emsbtn.empUpdateMiddleName(test_case.middlename)
            
            if (test_case.birth_date)
                emsbtn.empBirthdate(test_case.birth_date)

            if (test_case.phone)
                emsbtn.empUpdatePhone(test_case.phone)

            if (test_case.gender)
                emsbtn.empGender(test_case.gender).click()

            if (test_case.email)
                emsbtn.empUpdateEmail(test_case.email)

            if (test_case.blood_group)
                emsbtn.empBloodGroup(test_case.blood_group).click()

            if (test_case.marital_status)
                emsbtn.empMaritalStatus(test_case.marital_status).click()

            if (test_case.nationality)
                emsbtn.empNationality(test_case.nationality).click()


            if(test_case.current_flat_house)
                emsbtn.empUpdateFlatNo(test_case.current_flat_house)

            if(test_case.current_building_apartment)
                emsbtn.empUpdateAparment(test_case.current_building_apartment)

            if(test_case.current_area_street_sector_village)
                emsbtn.empUpdateArea(test_case.current_area_street_sector_village)

            if(test_case.current_landmark)
                emsbtn.empUpdateLandmark(test_case.current_landmark)

            if(test_case.current_pincode)
                emsbtn.empUpdatePincode(test_case.current_pincode)
            
            if(test_case.country)
                emsbtn.empUpdateCountry(test_case.country).click()

            if(test_case.state)
                emsbtn.empUpdateState(test_case.state).eq(0).click()


            if(test_case.city)
                emsbtn.empUpdateCity(test_case.city)


            if(test_case.university)
                emsbtn.empUpdateUniversity(test_case.university)

            if(test_case.degree)
                emsbtn.empUpdateDegree(test_case.degree).click()
                
            if(test_case.stream)
                emsbtn.empUpdateStream(test_case.stream)

            if(test_case.college)
                emsbtn.empUpdateCollege(test_case.college)
                
            if(test_case.cgpa)
                emsbtn.empUpdateCgpa(test_case.cgpa)

            if(test_case.passing_year)
                emsbtn.empUpdatePassingYear(test_case.passing_year)

            if(test_case.eme_name)
                emsbtn.empUpdateEmeName(test_case.eme_name)
            if(test_case.eme_phone)
                emsbtn.empUpdateEmePhone(test_case.eme_phone)
            if(test_case.eme_relation)
                emsbtn.empUpdateEmeRelation(test_case.eme_relation)
            if(test_case.physician_name)
                emsbtn.empUpdatePhysicianName(test_case.physician_name)
            if(test_case.physician_phone)
                emsbtn.empUpdatePhysicianPhone(test_case.physician_phone)
            if(test_case.medical_condition)
                emsbtn.empUpdateMedicalCondition(test_case.medical_condition)
            if(test_case.authority)
                emsbtn.empUpdateAuthority(test_case.authority)

        emsbtn.submitEmpUpdate().click()
        emsbtn.swalBtn().click()
            
    })


    })



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


    it('Employee Portal Access Tab',()=>{
        emsbtn.getPortalRequestTab().click()
        emsbtn.getPendingRequest().click()

        emp_full_body.forEach((test_case)=>{


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

                emsbtn.empUpdateFlatNo(test_case.current_flat_house)

                emsbtn.empUpdateAparment(test_case.current_building_apartment)

                emsbtn.empUpdateArea(test_case.current_area_street_sector_village)

                emsbtn.empUpdateLandmark(test_case.current_landmark)

                emsbtn.empUpdatePincode(test_case.current_pincode)
            
                emsbtn.empUpdateCountry(test_case.current_country).click()

                emsbtn.empUpdateState(test_case.current_state).eq(0).click()

                emsbtn.empUpdateCity(test_case.current_city_town)

                emsbtn.empUpdateUniversity(test_case.university)

                emsbtn.empUpdateDegree(test_case.degree).click()
                
                emsbtn.empUpdateStream(test_case.stream)

                emsbtn.empUpdateCollege(test_case.college)

                emsbtn.empUpdateCgpa(test_case.cgpa)

                emsbtn.empUpdatePassingYear(test_case.passing_year)

                emsbtn.empUpdateEmeName(test_case.eme_name)

                emsbtn.empUpdateEmePhone(test_case.eme_phone)

                emsbtn.empUpdateEmeRelation(test_case.eme_relation).click()

                emsbtn.empUpdatePhysicianName(test_case.physician_name)

                emsbtn.empUpdatePhysicianPhone(test_case.physician_phone)

                emsbtn.empUpdateMedicalCondition(test_case.medical_condition)
  
                emsbtn.empUpdateAuthority(test_case.authority)

                emsbtn.empJoindedDate(test_case.joined_at)
                //emsbtn.requestFormUpdateBtn().click()
                //emsbtn.requestFormApproveBtn().click()
                //emsbtn.requestFormDenyBtn().click()
                //emsbtn.requestFormResendBtn().click()


        })

    })

})
