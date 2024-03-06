export class EMSBtns {
    // Create Employee Tab buttons

    createEmpBtn(){
        return cy.get('.css-aqr2km > .MuiButtonBase-root');
    }

    empFirstName(firstname){
        return cy.get('input[name="firstname"]').clear().type(`${firstname}`);
    }
    empLastName(lastname){
        return cy.get('input[name="lastname"]').clear().type(`${lastname}`);
    }
    empPhone(phone){
        return cy.get('input[name="phone"]').clear().type(`${phone}`);
    }
    empEmail(email){
        return cy.get('input[name="email"]').clear().type(`${email}`);
    }
    selectAuthorities(authorities){
        cy.get('#mui-component-select-authorities').click();
        return cy.get(`[data-value= "${authorities}"]`)
        
    }

    fillJoiningDate(joined_at){
        cy.get('input[name="joined_at"]').click();
        return cy.get('[name = "joined_at"]').clear().type(`${joined_at}`)
    }
    nextBtn(){
        return cy.get('button.MuiButton-containedPrimary').contains('Next');
    }


    clickLabel(permission){
        return cy.contains('label', `${permission}`);
        
    }

    submitBtn(){
        return cy.get('.css-1wkuf0r > :nth-child(2)')
    }
    backBtn(){
        return cy.get('.css-1wkuf0r > :nth-child(1)')
    }
    


    //Employee Details Tab buttons

    // Employee Update Flow buttons


    editEmpDetails(){
        return cy.get('button[type="button"] svg[data-testid="EditIcon"]')


    }
    submitEmpUpdate(){
        return cy.get('.empForm_submitBox__oqrUf > .MuiButtonBase-root')
    }

    empUpdateMiddleName(middlename){
        return cy.get('input[name="middlename"]').clear().type(`${middlename}`);
    }
    empBirthdate(birth_date){
        return cy.get('input[name="birth_date"]').type(`${birth_date}`)
    }
    empGender(gender){
        cy.get('div[role="combobox"]').eq(0).click()
        return cy.get('ul[role="listbox"]')
        .find(`li[data-value="${gender}"]`)
    }
    empBloodGroup(blood_group){
        cy.get('div[role="combobox"]').eq(1).click()
        return cy.get('ul[role="listbox"]')
        .find(`li[data-value="${blood_group}"]`)
    }
    
    empMaritalStatus(marital_status){
        cy.get('div[role="combobox"]').eq(2).click()
        return cy.get('ul[role="listbox"]')
        .find(`li[data-value="${marital_status}"]`)
    }
    empNationality(nationality){
        return cy.get('input[id="nationality-outlined"]').type(`${nationality}`)
    }
    empUpdateFirstName(firstname){
        return cy.get('input[name="firstname"]').type(`${firstname}`);
    }
    empUpdateLastName(lastname){
        return cy.get('input[name="lastname"]').type(`${lastname}`);
    }
    empUpdatePhone(phone){
        return cy.get('input[name="phone"]').type(`${phone}`);
    }
    empUpdateEmail(email){
        return cy.get('input[name="email"]').type(`${email}`);
    }














    selectEmployee(){
        return cy.get('#cell-name-9');
    }
    activityBtn(){
        return cy.contains('button', 'Activity');
        
    }
    typeStartDate(start_date){
        return cy.get("input[name='StartDate']").type(`${start_date}`)
    }
    typeEndDate(end_date){
        return cy.get("input[name='EndDate']").type(`${end_date}`)
    }
    clearDate(){
        return cy.get('.css-mb7rj3 > .MuiButtonBase-root');
    }

    //Employee Timing Flow

    timingsBtn(){
        return cy.contains('button', 'TIMINGS');
        
    }
    empInTime(in_time){
        cy.contains('p','In Time').next()
        return cy.get('input[name="in_time"]').type(`${in_time}`)
    }
    empOutTime(out_time){
        cy.contains('p','Out Time').next()
        return cy.get('input[name="out_time"]').type(`${out_time}`)
    }
    clickEmpWorkingDays(working_days) {
        cy.contains('Select Working Days:').next().within(() => {
            working_days.forEach(day => {
                cy.contains(day).click();
            });
        });
    }

    typeNoOfEmpLeaves(leaves){
        cy.contains('p','Select Annual Leaves').next()
        cy.get('input[name="leaves"]').clear().type(leaves)
    }
    empTimmingSaveBtn(){
        return cy.contains('button','Save Changes')
    }


    //Premission Tab Buttons

    permissionsBtn(){
        return cy.contains('button', 'Permissions');
        
    }
    lmsBtn(){
        return cy.contains('p','LMS')
    }
    centerBtn(){
        return cy.contains('p','CENTER')
    }
    emsBtn(){
        return cy.contains('p','EMS')
    }
    academicsBtn(){
        return cy.contains('p','ACADEMICS')
    }
    batchSchedulingBtn(){
        return cy.contains('p','BATCH SCHEDULING')
    }
    permissionSaveChangesBtn(){
        return cy.contains('button','Save Changes')
    }
    swalBtn(){
        return cy.get('.swal-button')
    }
    getFirstCheckboxInPermissionsTable(){
        return cy.get('.MuiTableRow-root').eq(1).find('input[type="checkbox"]');


    }
    
}