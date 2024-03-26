import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";
import { profile } from "../../page/profile";


const base_url = getPortalUrl() + "/Lms"
beforeEach(() => {
  bypassLogin(
    Cypress.env("auth").kavita,
    Cypress.env("token").kavita
  )
  skipMSTunnelWarning(base_url)
});


var myProfile = new profile()







describe('My Profile Tab',()=>{

    it('Logout Flow',()=>{
        myProfile.clickOnProfile().click()
        myProfile.clickLogout().click()

    })

    it('Signout All Flow',()=>{
        myProfile.clickOnProfile().click()
        myProfile.clickOnMyProfile().click()
        myProfile.signoutAll().click()
        myProfile.noCancelBtn().click()
        //myProfile.yesSignoutBtn().click()
    })



    it('Change Password Flow',()=>{
        myProfile.clickOnProfile().click()
        myProfile.clickOnMyProfile().click()
        myProfile.selectChangePassword().click()
        myProfile.typeNewPassword("ABCDEF@GHi12")
        myProfile.typeConfirmPassword("ABCDEF@GHi12")
        myProfile.typeCurrentPassword("POIIU@YTREWQ12ef")
        myProfile.finalChangePasswordBtn().click()

    })

    it('Full Day Leave Flow',()=>{
        myProfile.clickOnProfile().click()
        myProfile.clickOnMyProfile().click()
        myProfile.selectLeavesTab().click()
        myProfile.selectLeaveType("SICK").click()
        myProfile.selectLeaveMethod("fullDay").click()
        myProfile.typeStartDateOfLeave("2024-03-03")
        myProfile.typeEndDateOfLeave("2024-03-23")
        myProfile.typeReasonForLeave("Dev Darshan")
        myProfile.applyBtn().click()
    })


    it('Half Day Leave Flow',()=>{
        myProfile.clickOnProfile().click()
        myProfile.clickOnMyProfile().click()
        myProfile.selectLeavesTab().click()
        myProfile.selectLeaveType("SICK").click()
        myProfile.selectLeaveMethod("halfDay").click()
        myProfile.typeStartDateOfLeave("2024-03-03")

        myProfile.typeReasonForLeave("Dev Darshan")
        myProfile.typeStartTimeOFLeave("12:00")
        myProfile.typeEndTimeOFLeave("18:00")
        myProfile.applyBtn().click()
    })







})