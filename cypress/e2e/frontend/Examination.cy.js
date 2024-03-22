import { ExaminationBtns } from "../../page/Examination";
import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";


const base_url = getPortalUrl() + "/Examination"
beforeEach(() => {
  bypassLogin(
    Cypress.env("auth").kavita,
    Cypress.env("token").kavita
  )
  skipMSTunnelWarning(base_url)
});


var payload =  null;
var payload_register =  null;
var payload_1 =  null;


before(()=>{
    cy.fixture('frontend/Examination/AddQuestion').then((data)=>{
        payload=data
    })
})

before(()=>{
    cy.fixture('frontend/Examination/CreateSet').then((data)=>{
        payload_register=data
    })
})
before(()=>{
    cy.fixture('frontend/Examination/EditSet').then((data)=>{
        payload_1=data
    })
})


var examinationbtn = new ExaminationBtns ()








describe('Examination',()=>{
/*


    it('Examination Filters (Select And Deselect)', () => {

        examinationbtn.typeInSearch("S")
        examinationbtn.selectCoursesForFilter(["MYSQL","HTML5","CSS3"]).click()
        examinationbtn.selectTypesOfCourses(["MCQ","SCQ","FILL"]).click()
        examinationbtn.selectLevelOfQuestion(["E","H"]).click()
        examinationbtn.selectPageNumber("2").click()
        examinationbtn.selectPageSize("100").click()
        examinationbtn.cancelFiltersInQuestionBankTab(["2","0"])

    })

    it('Add Question Flow', () => {

        examinationbtn.selectAddQuestionBtn().click()

        payload.forEach((test_case)=>{
            examinationbtn.selectCoursesWhileAddingQuestion(test_case.course).click()
            examinationbtn.selectQuestionTypeWhileAddingQuestion(test_case.question_type).click()
            examinationbtn.selectDifficultyWhileAddingQuestion(test_case.difficulty_level).click()
            examinationbtn.typeQuestion(test_case.question)
            if(test_case.case_sensetive){
                examinationbtn.clickCaseSensetiveCheckbox().click()
            }
            if(test_case.mcq || test_case.scq){
                examinationbtn.addOptionButton().click()
                examinationbtn.addOptionButton().click()
                examinationbtn.typeOption1(test_case.option1)
                examinationbtn.typeOption2(test_case.option2)
                examinationbtn.typeOption3(test_case.option3)
                examinationbtn.typeOption4(test_case.option4)
                if(test_case.mcq){
                    examinationbtn.clickAnswerCheckbox(test_case.answer)
                }
                if(test_case.scq){
                    examinationbtn.clickAnswerRadioBtn(test_case.answer)
                }

            }
            examinationbtn.typeExplanation(test_case.explanation)
            examinationbtn.saveBtn().click()

        })
        examinationbtn.addToPoolBtn().click()
        examinationbtn.swalBtn().click()

    })

    it('Delete Question Flow',()=>{
        examinationbtn.scrollRight()
        examinationbtn.deleteQuestionBtn().click()
        examinationbtn.yesDeleteBtn().click()
        //examinationbtn.noCancelDeleteBtn().click()
        //examinationbtn.crossBtn().click()
        examinationbtn.swalBtn().click()
    })


    it('Create Set Flow',()=>{
        examinationbtn.getQuestionTab().click()
        
        payload_register.forEach((test_case)=>{
            examinationbtn.clickOnCreateNew().click()
            examinationbtn.typeTitleOfSet(test_case.title)
            examinationbtn.selectCourses(test_case.courses);
            examinationbtn.selectQuestionType(test_case.question_types).click()
            examinationbtn.selectDifficultyLevel(test_case.difficulty_level).click()
            examinationbtn.selectAssessmentType(test_case.assessment_type).click()
            examinationbtn.typePassingPercentage(test_case.passing_percent)
            examinationbtn.typeDuration(test_case.duration)
            examinationbtn.selectQuestions(test_case.number_of_questions)
            examinationbtn.typeMarksForEachFILLUPS(test_case.fill_marks)
            examinationbtn.typeMarksForEachMCQ(test_case.mcq_marks)
            examinationbtn.typeMarksForEachSCQ(test_case.scq_marks)
            examinationbtn.nextgBtn().click()
            examinationbtn.changeMarkOfQuestionBeforePreview("4")
            //examinationbtn.backBtn().click()
            examinationbtn.previewBth().click()
            //examinationbtn.cancelBtn().click()
            examinationbtn.saveSetBtn().click()
            examinationbtn.swalBtn().click()

        })

    })


    it('Delete Set Flow',()=>{
        examinationbtn.getQuestionTab().click()
        examinationbtn.clickOnSetThatWantToEdit("Internal Assessment").click()
        //examinationbtn.cancelBtn().click()
        examinationbtn.deleteBtn().click()
        examinationbtn.noCancelDeleteBtn().click()
        //examinationbtn.yesDeleteBtn().click()
    })
    it('Cancel Edit/Delete Set Flow',()=>{
        examinationbtn.getQuestionTab().click()
        examinationbtn.clickOnSetThatWantToEdit("Internal Assessment").click()
        examinationbtn.cancelBtn().click()

    })
*/


    it('Edit Set Flow',()=>{
        examinationbtn.getQuestionTab().click()
        
        payload_1.forEach((test_case)=>{
            examinationbtn.clickOnSetThatWantToEdit(test_case.exam_type).click()
            examinationbtn.clickEditButton().click()
            if(test_case.title)
                examinationbtn.editTitleOfSet(test_case.title)
            if(test_case.courses)
                examinationbtn.selectCourses(test_case.courses);
            if(test_case.question_types)
                examinationbtn.selectQuestionType(test_case.question_types).click()
            if(test_case.difficulty_level)
                examinationbtn.selectDifficultyLevel(test_case.difficulty_level).click()
            if(test_case.assessment_type)
                examinationbtn.selectAssessmentType(test_case.assessment_type).click()
            if(test_case.passing_percent)
                examinationbtn.editPassingPercentage(test_case.passing_percent)
            if(test_case.duration)
                examinationbtn.editDuration(test_case.duration)
            if(test_case.number_of_questions)
                examinationbtn.selectExtraQuestions(test_case.number_of_questions)
            if(test_case.fill_marks)
                examinationbtn.typeMarksForEachFILLUPS(test_case.fill_marks)
            if(test_case.mcq_marks)
                examinationbtn.typeMarksForEachMCQ(test_case.mcq_marks)
            if(test_case.scq_marks)
                examinationbtn.typeMarksForEachSCQ(test_case.scq_marks)
            examinationbtn.nextgBtn().click()
            examinationbtn.changeMarkOfQuestionBeforePreview("4")
            //examinationbtn.backBtn().click()
            examinationbtn.previewBth().click()
            //examinationbtn.cancelBtn().click()
            examinationbtn.updateSetBtn().click()
            examinationbtn.swalBtn().click()

        })

    })











})
