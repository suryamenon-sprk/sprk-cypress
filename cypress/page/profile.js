export class profile{
    clickOnProfile(){
        return cy.get('button[type="button"]').eq(2)
    }
    clickOnMyProfile(){
        return cy.contains('li','My Profile')
    }
    clickLogout(){
        return cy.contains('li',' Logout')
    }
    signoutAll(){
        return cy.contains('button','SignOut All')
    }
    noCancelBtn(){
        return cy.contains('button','No, Cancel')

    }
    yesSignoutBtn(){
        return cy.contains('button','Yes, Signout')

    }
    selectChangePassword(){
        return cy.contains('button','Change Password')
    }
    typeCurrentPassword(current_password){
        cy.get('[name="currentPassword"]').type(current_password)
    }
    typeNewPassword(new_password){
        cy.get('[name="newPassword"]').type(new_password)
    }
    typeConfirmPassword(confirm_password){
        cy.get('[name="confirmPassword"]').type(confirm_password)
    }

    finalChangePasswordBtn(){
        return cy.get(':nth-child(8) > .MuiBox-root > .MuiButtonBase-root')
    }
    selectLeavesTab(){
        return cy.get('button.MuiTab-root').contains('Leaves').click();
    }
    selectLeaveType(leave_type){
        cy.get('#Leave-dropdown').click();
        return cy.get(`[data-value=${leave_type}]`)
    }
    selectLeaveMethod(leave_method){
        cy.get('#LeaveMethod-dropdown').click();
        return cy.get(`[data-value=${leave_method}]`)
    }

    typeStartDateOfLeave(start_date){
        cy.contains('p','Start Date')
        .next()
        .find('input[name="start"]')
        .type(start_date);
    }
    typeEndDateOfLeave(end_date){
        cy.contains('p','End Date')
        .next()
        .find('input[name="end"]')
        .type(end_date);
    }
    typeReasonForLeave(reason){
        cy.get('textarea[name="reason"]').type(reason)
    }
    applyBtn(){
        return cy.contains('button','APPLY')
    }

    typeStartTimeOFLeave(start_time){
        cy.contains('p','Start Time')
        .next()
        .find('input[name="startTime"]')
        .type(start_time)
    }
    typeEndTimeOFLeave(end_time){
        cy.contains('p','End Time')
        .next()
        .find('input[name="endTime"]')
        .type(end_time)
    }








    
}