export class ExaminationBtns{

    typeInSearch(text_to_search){
        cy.get('input[placeholder="Search "]').type(text_to_search)
    }

    selectCoursesForFilter(courses){
        cy.get('[data-testid="ArrowDropDownIcon"]').eq(0).click().then(()=>{
            courses.forEach((course)=>{
                cy.get('input[type="text"]').eq(1).type(course).type('{downarrow}{enter}')
            })
        })
        return cy.get('body')

    }

    selectTypesOfCourses(types){
        cy.get('[data-testid="ArrowDropDownIcon"]').eq(1).click().then(()=>{
            types.forEach((type)=>{
                cy.get('input[type="text"]').eq(2).type(type).type('{downarrow}{enter}')
            })
        })
        return cy.get('body')

    }
    selectLevelOfQuestion(levels){
        cy.get('[data-testid="ArrowDropDownIcon"]').eq(2).click().then(()=>{
            levels.forEach((level)=>{
                cy.get('input[type="text"]').eq(3).type(level).type('{downarrow}{enter}')
            })
        })
        return cy.get('body')

    }
    cancelFiltersInQuestionBankTab(filters) {
        filters.forEach((filter) => {
            cy.get('.MuiInputBase-input').eq(filter)
            cy.get('[data-testid="CloseIcon"]').eq(filter)
            .click({force: true});
        });
    }
    
    
    selectPageNumber(number){
        cy.get('input[type="number"]').eq(0).clear().type(number)
        return cy.contains('button','Go')
    }
    selectPageSize(pageSize){
        cy.get('[aria-labelledby="pageSizeSelect"]').click()
        return cy.get(`li[data-value="${pageSize}"]`)
    }
    selectAddQuestionBtn(){
        return cy.contains('button','Add Question')
    }

    //Add Question Buttons

    selectCoursesWhileAddingQuestion(courses){
        cy.get('[aria-labelledby="course-label course-select"]').click()
        courses.forEach((course)=>{
            cy.contains('li',`${course}`).click()
        })
        return cy.get('body')
    }
    selectQuestionTypeWhileAddingQuestion(types){
        cy.get('[aria-labelledby="question-type-label question-type-select"]').click()
        cy.contains('li',`${types}`).click()
        return cy.get('body')
    }

    selectDifficultyWhileAddingQuestion(level){
        cy.get('[aria-labelledby="difficulty-level-label difficulty-level-select"]').click()
        cy.contains('li',`${level}`).click()
        return cy.get('body')
    }
    typeQuestion(question){
        cy.get('textarea[name="question"]').type(question)
    }
    clickCaseSensetiveCheckbox(){

        return cy.get('input[type="checkbox"]')
    }


    addOptionButton(){
        return cy.contains('button','+ Add Option')
    }
    typeOption1(option1){
        cy.get('input[name="option-0"]').type(option1)
    }
    typeOption2(option2){
        cy.get('input[name="option-1"]').type(option2)
    }
    typeOption3(option3){
        cy.get('input[name="option-2"]').type(option3)
    }
    typeOption4(option4){
        cy.get('input[name="option-3"]').type(option4)
    }

    clickAnswerRadioBtn(answer){
        return cy.get('input[type="radio"]').eq(answer).click()
    }
    clickAnswerCheckbox(answers){
        return answers.forEach((answer)=>{ cy.get('input[type="checkbox"]').eq(answer).click()
    })
    }



    typeExplanation(explanation){
        cy.get('textarea[name="explanation"]').type(explanation)
    }

    saveBtn(){
        return cy.contains('button','Save')
    }
    resetBtn(){
        return cy.contains('button','Reset')
    }
    addToPoolBtn(){
        return cy.contains('button','Add to Pool')
    }
    swalBtn(){
        return cy.get('.swal-button')
    }
    scrollRight(){
        cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('right')
    }
    deleteQuestionBtn(){
        return cy.get('.ag-cell-wrapper button').eq(1)
    }
    noCancelDeleteBtn(){
        return cy.contains('button','No,Cancel')
    }
    yesDeleteBtn(){
        return cy.contains('button','Yes,Delete')
    }
    crossBtn(){
        return cy.get('[data-testid="CloseIcon"]')
    }


    //Create Question Set Flow Buttons

    getQuestionTab(){
        return cy.get('[aria-label="Examination"]').click().then(()=>{
        cy.get('[role="button"]').eq(7)
    })
    }

    clickOnCreateNew(){
        return cy.contains('p','Create New')
    }
    typeTitleOfSet(title){
        cy.get('input[name="title"]').type(title)
    }
    typePassingPercentage(passing_parcent){
        cy.get('input[name="passingPercentage"]').type(passing_parcent)
    }
    typeDuration(duration){
        cy.get('input[name="duration"]').type(duration)
    }
    selectCourses(courses){
        cy.get('[aria-labelledby="mui-component-select-course"]').click()
        courses.forEach((course)=>{
            cy.contains('li',`${course}`).click()
        })
        return  cy.get('body').type('{esc}')

    }
    selectQuestionType(types){
        cy.get('[role="combobox"]').eq(1).click({ force: true })
        types.forEach((type)=>{
            cy.contains('li',`${type}`).click()
        })
        return cy.get('body')
    }
    selectDifficultyLevel(levels){
        cy.get('[role="combobox"]').eq(2).click()
        levels.forEach((level)=>{
            cy.contains('li',`${level}`).click()
        })
        return cy.get('body')
    }
    
    selectAssessmentType(type){
        cy.get('[role="combobox"]').eq(4).click()
        return cy.contains('li',`${type}`)
    }
    nextgBtn(){
        return cy.contains('button','Next')
    }
    selectQuestions(number_of_questions){
        for(let i=0;i<number_of_questions;i++){
            cy.get('input[type="checkbox"]').eq(i).click()
        }
    }
    typeMarksForEachSCQ(marks){
        cy.get('[name="numberofSCQ"]') 
        .invoke('val') 
        .then(value => {
            const numberOfSCQ = parseInt(value); 
            if (numberOfSCQ > 0) {
            cy.get('[name="marksofSCQ"]')  
                .type(marks);
            }
        });

    }
    typeMarksForEachMCQ(marks){
        cy.get('[name="numberofMCQ"]') 
        .invoke('val') 
        .then(value => {
            const numberOfSCQ = parseInt(value); 
            if (numberOfSCQ > 0) {
            cy.get('[name="marksofMCQ"]')  
                .type(marks);
            }
        });

    }
    typeMarksForEachFILLUPS(marks){
        cy.get('[name="numberOfFillUps"]') 
        .invoke('val') 
        .then(value => {
            const numberOfSCQ = parseInt(value); 
            if (numberOfSCQ > 0) {
            cy.get('[name="marksofTF"]')  
                .type(marks);
            }
        });

    }

    changeMarkOfQuestionBeforePreview(marks){
        cy.get('[type="number"]').eq(1).clear().type(`{rightarrow}${marks}`)
    }
    previewBth(){
        return cy.contains('button','Preview')
    }
    backBtn(){
        return cy.contains('button','Back')
    }
    cancelBtn(){
        return cy.contains('button','Cancel')
    }
    saveSetBtn(){
        return cy.contains('button','Save Set')
    }

    clickOnSetThatWantToEdit(exam_type){
        return cy.contains('p',`${exam_type}`).next().find(".MuiBox-root.css-146ho0k").eq(1)
    }
    deleteBtn(){
        return cy.contains('button','Delete')

    }



    // Edit Set Flow buttons

    clickEditButton(){
        return cy.contains('button','Edit Set')
    }

    editTitleOfSet(title){
        cy.get('input[name="title"]').clear().type(title)
    }
    editPassingPercentage(passing_parcent){
        cy.get('input[name="passingPercentage"]').clear().type(passing_parcent)
    }
    editDuration(duration){
        cy.get('input[name="duration"]').clear().type(duration)
    }
    updateSetBtn(){
        return cy.contains('button','Update Set')

    }
    selectExtraQuestions(number_of_questions){
        cy.get('input[type="checkbox"]:not(:checked)').then($uncheckedCheckboxes => {
            if ($uncheckedCheckboxes.length === 0) {
                return;
              }
            for (let i = 0; i < Math.min(number_of_questions, $uncheckedCheckboxes.length); i++) {
              cy.wrap($uncheckedCheckboxes[i]).check();
            }
        });
    }










    
}