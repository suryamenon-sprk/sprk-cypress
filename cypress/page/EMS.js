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
}