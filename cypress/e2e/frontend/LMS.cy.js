import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";
import { Action } from "../../page/LMS";


const base_url = getPortalUrl() + "/Lms"
beforeEach(() => {
  bypassLogin(
    Cypress.env("auth").kavita,
    Cypress.env("token").kavita
  )
  skipMSTunnelWarning(base_url)
});


var payload = null;
var action = new Action();
before(() => {
  cy.fixture("frontend/LMS/enquiry")
    .then((data) => payload = data)
})




describe(
  "Create Tab",
  () => { 

    
/*    it(
      "Action => CREATE", 
      () => {
        payload.forEach(testCase => {
          if (testCase.skip)
            return;

          // STEP 1 - Create Button
          action.getCreateButton().click();

          // STEP 2 - Input
          action.getEnquiryCreationModalFieldByName("student_firstname")
                .type(testCase.student_firstname)
          action.getEnquiryCreationModalFieldByName("student_lastname")
                .type(testCase.student_lastname)
          action.getEnquiryCreationModalFieldByName("primary_mobile")
                .type(testCase.primary_mobile)
          action.getEnquiryCreationModalFieldByName("primary_email")
                .type(testCase.primary_email)

          // STEP 3 - Submit
          action.getEnquiryCreationModalSubmitButtion().click()
        });
    })
*/

    // beforeEach(() => {
    //   bypassLogin(
    //     Cypress.env("auth").kavita,
    //     Cypress.env("token").kavita
    //   )

    //   const base_url = getPortalUrl() + "/Lms"
    //   skipMSTunnelWarning(base_url)

      
    // });
    

   it(
      "Create Enquiry",
      () => {
        cy.get('.MuiButton-containedPrimary').eq(0).click(); // Clicks the "Create" button

        cy.get('input[name="student_firstname"]').type("Rupesh"); // First Name
        cy.get('input[name="student_lastname"]').type("Mishra"); // Last Name
        cy.get('input[name="primary_mobile"]').type("90888888999"); // Phone
        cy.get('input[name="primary_email"]').type("example@gmail.com"); // Email
        
        cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();

        cy.get('.carousel-root .slide').eq(0).within(() => {
          // Interact with the first button inside the slide
          cy.get('button').eq(1).click(); // Click on the first button
      }); // <-- Added closing parenthesis for within()
      }
    );
 

    it("Create enquiry along with filling all details (ADMIT)",()=>{

      cy.get('.MuiButton-containedPrimary').eq(0).click(); // Clicks the "Create" button

      cy.get('input[name="student_firstname"]').type("Rupesh"); // First Name
      cy.get('input[name="student_lastname"]').type("Mishra"); // Last Name
      cy.get('input[name="primary_mobile"]').type("90298888999"); // Phone
      cy.get('input[name="primary_email"]').type("example@exam.com"); // Email
      cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();


      if ( cy.get('.carousel-root .slide').should('exist')) {

          cy.get('.carousel-root .slide').eq(1).within(() => {
            // Interact with the first button inside the slide
            cy.get('button').eq(0).click();}) 
        
      };

      cy.get('.swal-button').click();
       // Type Birth Date
      cy.get('input[name="birth_date"]').clear().type("2000-01-01");

      // Select Gender
      cy.get('#demo-simple-select').click(); // Open dropdown
      cy.contains('He/Him').click(); // Assuming 'Male' is one of the options

      // Type Alternate Number
      cy.get('input[name="secondary_mobile"]').clear().type("1234567890");

      // Type Secondary Email
      cy.get('input[name="secondary_email"]').clear().type("example@exple.com");
    
      
      // Type into Flat/House No input field
      cy.get('input[name="residence_no"]').clear().type('B402');

      // Type into Building/Apartment Name textarea field
      cy.get('textarea[name="flat_house_building"]').clear().type('Sample Building Name');

      // Type into Area/Sector/Street input field
      cy.get('input[name="area_street_sector_village"]').clear().type('Sample Area');

      // Type into Landmark textarea field
      cy.get('textarea[name="landmark"]').clear().type('Sample Landmark');

      // Type into Pincode input field
      cy.get('input[name="pincode"]').clear().type('410210');

      // Type into Country input field

      cy.get('.MuiFormControl-root p:contains("Country") + .MuiAutocomplete-root input.MuiInputBase-input').type('India');



      

      // Type into State input field
      cy.get('.MuiFormControl-root p:contains("State") + .MuiAutocomplete-root input.MuiInputBase-input').type('Maharashtra');

      // Type into City/Town input field
      cy.get('.MuiFormControl-root p:contains("City/Town") + .MuiAutocomplete-root input.MuiInputBase-input').type('Navi Mumbai');




      
      cy.get('input[name="college_name"]').clear().type('Vishwaniketan college');

      // Selecting an option from the "Qualification" dropdown
      cy.contains('p', 'Qualification:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.contains("Undergraduate").click();
      // Selecting an option from the "Occupation" dropdown
      cy.contains('p', 'Occupation:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="Student"]').click(); // Replace 'Option Text' with the actual option text you want to select

      // Typing into the "Career Requirement" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(0).clear().type('Full Stack Developer');

      // Typing into the "Software Known" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(1).clear().type('VS code');

      // Selecting an option from the "Have you done any course earlier" dropdown
  





      cy.contains('p', 'Action') // Locate the <p> tag with text "Action"
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id "demo-simple-select"
      .click(); // Click to open the dropdown
    
      if(cy.contains('ADMIT').click()){   //ADMIT  FLOW
      // // Source
      cy.contains('p', 'Source:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="WEBSITE"]').click();
      // // Visited

      
      cy.contains('p', 'Visited:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="false"]').click();


      // // Click Update button
      cy.contains('Update').click();

      
      
        
    
      cy.get('svg[data-testid="AddIcon"]').click();

      cy.contains('.MuiListItemText-primary', 'Basic MS-Office')
      .click();
      
      cy.get('[aria-label="move selected right"]').click();
      cy.get('.css-iusmz7 > .MuiButtonBase-root').click();
      // Click on the div element with a specific combination of parent classes
      cy.get('div.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.css-9030ew-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root')
      .find('div[role="combobox"][aria-controls=":r1v:"][aria-expanded="false"][aria-haspopup="listbox"][aria-labelledby="demo-simple-select-label demo-simple-select"]')
      .click();
    
      cy.get('li[data-value="INSTALLMENT"]').click();
      cy.get('input[name="discount"]').type("3000");
      cy.get('input[name="discount_reason"]').type("kjhgfdfghjkl");

      cy.contains('p', 'No. of Installments')
      .next() // Move to the next sibling element, which is the div containing the number of installments
      .click();
      cy.get('li[data-value="7"]').click();





      cy.contains('button', 'Submit').click();//submit button


      cy.get('input[id=":r2b:"]').clear().type("2024-02-27");
      cy.get('input[name="paid_amount"]').clear().type("3000");
      cy.get('input[id=":r2d:"]').type("686");
      cy.get('div#demo-simple-select[aria-controls=":r2e:"][role="combobox"]')
      .click()
    
      cy.get('li[data-value="CASH"]').click();

      // Now interact with the button
      cy.get('.MuiGrid-grid-sm-12 > .MuiButton-contained')
        // .contains('Submit')
        // .should('be.visible')
        .click();

      };//ADMIT FLOW ENDS




    });

    
    
    it("Create enquiry along with filling all details (TRANSFER)",()=>{

      cy.get('.MuiButton-containedPrimary').eq(0).click(); // Clicks the "Create" button

      cy.get('input[name="student_firstname"]').type("Rupesh"); // First Name
      cy.get('input[name="student_lastname"]').type("Mishra"); // Last Name
      cy.get('input[name="primary_mobile"]').type("90298888999"); // Phone
      cy.get('input[name="primary_email"]').type("example@exam.com"); // Email
      cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();


      if ( cy.get('.carousel-root .slide').should('exist')) {

          cy.get('.carousel-root .slide').eq(0).within(() => {
            // Interact with the first button inside the slide
            cy.get('button').eq(1).click();}) 
        
      };

      //cy.get('.swal-button').click();
       // Type Birth Date
      cy.get('input[name="birth_date"]').clear().type("2000-01-01");

      // Select Gender
      cy.get('#demo-simple-select').click(); // Open dropdown
      cy.get('.Mui-selected').click(); // Assuming 'Male' is one of the options

      // Type Alternate Number
      cy.get('input[name="secondary_mobile"]').clear().type("1234567890");

      // Type Secondary Email
      cy.get('input[name="secondary_email"]').clear().type("example@exple.com");
    
      
      // Type into Flat/House No input field
      cy.get('input[name="residence_no"]').clear().type('B402');

      // Type into Building/Apartment Name textarea field
      cy.get('textarea[name="flat_house_building"]').clear().type('Sample Building Name');

      // Type into Area/Sector/Street input field
      cy.get('input[name="area_street_sector_village"]').clear().type('Sample Area');

      // Type into Landmark textarea field
      cy.get('textarea[name="landmark"]').clear().type('Sample Landmark');

      // Type into Pincode input field
      cy.get('input[name="pincode"]').clear().type('410210');

      // Type into Country input field

      cy.get('.MuiFormControl-root p:contains("Country") + .MuiAutocomplete-root input.MuiInputBase-input').type('India');



      

      // Type into State input field
      cy.get('.MuiFormControl-root p:contains("State") + .MuiAutocomplete-root input.MuiInputBase-input').type('Maharashtra');

      // Type into City/Town input field
      cy.get('.MuiFormControl-root p:contains("City/Town") + .MuiAutocomplete-root input.MuiInputBase-input').type('Navi Mumbai');



              
            // Type into the "College Name" input field
            // Typing into the "College Name" input field
      cy.get('input[name="college_name"]').clear().type('Vishwaniketan college');

      // Selecting an option from the "Qualification" dropdown
      cy.contains('p', 'Qualification:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('.Mui-selected').click();
      // Selecting an option from the "Occupation" dropdown
      cy.contains('p', 'Occupation:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="Student"]').click(); // Replace 'Option Text' with the actual option text you want to select

      // Typing into the "Career Requirement" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(0).clear().type('Full Stack Developer');

      // Typing into the "Software Known" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(1).clear().type('VS code');

      // Selecting an option from the "Have you done any course earlier" dropdown
  





      cy.contains('p', 'Action') // Locate the <p> tag with text "Action"
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id "demo-simple-select"
      .click(); // Click to open the dropdown
    
      if(cy.contains('TRANSFER').click()){   
      // // Source
      cy.contains('p', 'Source:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="WEBSITE"]').click();
      // // Visited

      
      cy.contains('p', 'Visited:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="false"]').click();

      cy.contains('p', 'TRANSFER To')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('[data-value="5"]').click();


      // // Click Update button
      cy.contains('Update').click();

      
      
    }});
    








    it("Create enquiry along with filling all details (FOLLOW UP)",()=>{

      cy.get('.MuiButton-containedPrimary').eq(0).click(); // Clicks the "Create" button

      cy.get('input[name="student_firstname"]').type("Rupesh"); // First Name
      cy.get('input[name="student_lastname"]').type("Mishra"); // Last Name
      cy.get('input[name="primary_mobile"]').type("90298888999"); // Phone
      cy.get('input[name="primary_email"]').type("example@exam.com"); // Email
      cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();


      if ( cy.get('.carousel-root .slide').should('exist')) {

          cy.get('.carousel-root .slide').eq(0).within(() => {
            // Interact with the first button inside the slide
            cy.get('button').eq(1).click();}) 
        
      };

      //cy.get('.swal-button').click();
       // Type Birth Date
      cy.get('input[name="birth_date"]').clear().type("2000-01-01");

      // Select Gender
      cy.get('#demo-simple-select').click(); // Open dropdown
      cy.get('.Mui-selected').click(); // Assuming 'Male' is one of the options

      // Type Alternate Number
      cy.get('input[name="secondary_mobile"]').clear().type("1234567890");

      // Type Secondary Email
      cy.get('input[name="secondary_email"]').clear().type("example@exple.com");
    
      
      // Type into Flat/House No input field
      cy.get('input[name="residence_no"]').clear().type('B402');

      // Type into Building/Apartment Name textarea field
      cy.get('textarea[name="flat_house_building"]').clear().type('Sample Building Name');

      // Type into Area/Sector/Street input field
      cy.get('input[name="area_street_sector_village"]').clear().type('Sample Area');

      // Type into Landmark textarea field
      cy.get('textarea[name="landmark"]').clear().type('Sample Landmark');

      // Type into Pincode input field
      cy.get('input[name="pincode"]').clear().type('410210');

      // Type into Country input field

      cy.get('.MuiFormControl-root p:contains("Country") + .MuiAutocomplete-root input.MuiInputBase-input').type('India');



      

      // Type into State input field
      cy.get('.MuiFormControl-root p:contains("State") + .MuiAutocomplete-root input.MuiInputBase-input').type('Maharashtra');

      // Type into City/Town input field
      cy.get('.MuiFormControl-root p:contains("City/Town") + .MuiAutocomplete-root input.MuiInputBase-input').type('Navi Mumbai');



              
            // Type into the "College Name" input field
            // Typing into the "College Name" input field
      cy.get('input[name="college_name"]').clear().type('Vishwaniketan college');

      // Selecting an option from the "Qualification" dropdown
      cy.contains('p', 'Qualification:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('.Mui-selected').click();
      // Selecting an option from the "Occupation" dropdown
      cy.contains('p', 'Occupation:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="Student"]').click(); // Replace 'Option Text' with the actual option text you want to select

      // Typing into the "Career Requirement" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(0).clear().type('Full Stack Developer');

      // Typing into the "Software Known" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(1).clear().type('VS code');

      // Selecting an option from the "Have you done any course earlier" dropdown
  





      cy.contains('p', 'Action') // Locate the <p> tag with text "Action"
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id "demo-simple-select"
      .click(); // Click to open the dropdown
    
      if(cy.contains('FOLLOW UP').click()){   
      // // Source
      cy.contains('p', 'Source:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="WEBSITE"]').click();
      // // Visited

      
      cy.contains('p', 'Visited:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="false"]').click();


      // // Click Update button
      cy.contains('Update').click();

      cy.get('input[id=":r1s:"]').clear().type("2024-03-03");
      cy.get('input[id=":r1t:"]').clear().type("13:00");
      cy.contains('p', 'Type')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="EMAIL"]').click();
      cy.get('textarea[name="comment"]').type("xyz");

      cy.get('.css-a9mihf > .MuiButton-contained').click();

    }});







    it("Create enquiry along with filling all details (Discard)",()=>{

      cy.get('.MuiButton-containedPrimary').eq(0).click(); // Clicks the "Create" button

      cy.get('input[name="student_firstname"]').type("Pravin"); // First Name
      cy.get('input[name="student_lastname"]').type("Mishra"); // Last Name
      cy.get('input[name="primary_mobile"]').type("9029111228999"); // Phone
      cy.get('input[name="primary_email"]').type("exam@am.com"); // Email
      cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();


      if ( cy.get('.carousel-root .slide').should('exist')) {

          cy.get('.carousel-root .slide').eq(0).within(() => {
            // Interact with the first button inside the slide
            cy.get('button').eq(1).click();}) 
        
      };

      //cy.get('.swal-button').click();
       // Type Birth Date
      cy.get('input[name="birth_date"]').clear().type("2000-01-01");

      // Select Gender
      cy.get('#demo-simple-select').click(); // Open dropdown
      cy.contains('He/Him').click(); // Assuming 'Male' is one of the options

      // Type Alternate Number
      cy.get('input[name="secondary_mobile"]').clear().type("1234567890");

      // Type Secondary Email
      cy.get('input[name="secondary_email"]').clear().type("example@exple.com");
    
      
      // Type into Flat/House No input field
      cy.get('input[name="residence_no"]').clear().type('B402');

      // Type into Building/Apartment Name textarea field
      cy.get('textarea[name="flat_house_building"]').clear().type('Sample Building Name');

      // Type into Area/Sector/Street input field
      cy.get('input[name="area_street_sector_village"]').clear().type('Sample Area');

      // Type into Landmark textarea field
      cy.get('textarea[name="landmark"]').clear().type('Sample Landmark');

      // Type into Pincode input field
      cy.get('input[name="pincode"]').clear().type('410210');

      // Type into Country input field

      cy.get('.MuiFormControl-root p:contains("Country") + .MuiAutocomplete-root input.MuiInputBase-input').type('India');



      

      // Type into State input field
      cy.get('.MuiFormControl-root p:contains("State") + .MuiAutocomplete-root input.MuiInputBase-input').type('Maharashtra');

      // Type into City/Town input field
      cy.get('.MuiFormControl-root p:contains("City/Town") + .MuiAutocomplete-root input.MuiInputBase-input').clear().type('Navi Mumbai');



              
            // Type into the "College Name" input field
            // Typing into the "College Name" input field
      cy.get('input[name="college_name"]').clear().type('Vishwaniketan college');

      // Selecting an option from the "Qualification" dropdown
      cy.contains('p', 'Qualification:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('[data-value="Graduate"]').click();
      // Selecting an option from the "Occupation" dropdown
      cy.contains('p', 'Occupation:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="Student"]').click(); // Replace 'Option Text' with the actual option text you want to select

      // Typing into the "Career Requirement" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(0).clear().type('Full Stack Developer');

      // Typing into the "Software Known" input field (assuming it's a text input)
      cy.get('input[id="tags-outlined"]').eq(1).clear().type('VS code');

      // Selecting an option from the "Have you done any course earlier" dropdown
  





      cy.contains('p', 'Action') // Locate the <p> tag with text "Action"
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id "demo-simple-select"
      .click(); // Click to open the dropdown
    
      if(cy.contains('DISCARD').click()){   
      // // Source
      cy.contains('p', 'Source:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="WEBSITE"]').click();
      // // Visited

      
      cy.contains('p', 'Visited:')
      .next() // Get the next sibling element
      .find('#demo-simple-select') // Find the element with id demo-simple-select
      .click()
      cy.get('li[data-value="false"]').click();

      cy.get('input[name="discard_reason"]').type("xyz");
      // // Click Update button
      cy.contains('Update').click();


    }});







}); // <-- Added closing parenthesis for describe()










describe('Transfer', ()=>{
  
  it('Transfer tab flow', ()=> {


    cy.get('#ag-38-input').click();

    cy.get('.css-3dt1v3 > :nth-child(2)').click();
    cy.get('#demo-simple-select').click();
    cy.get('#menu-assigned_user li').eq(1).click();
    cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click()


  })


});


describe("Discard tab",()=>{

  it("Discard tab flow",()=>{

    cy.get('#ag-32-input').click();


    cy.get('.css-3dt1v3 > :nth-child(3)').click();
    cy.get('.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input').eq(1).type("sdfgfds");
    cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();
  });

  it("Cancel discard",()=>{
    cy.get('#ag-32-input').click();
    cy.get('.css-3dt1v3 > :nth-child(3)').click();
    cy.get('.Lms_transferModal__ulhfM > .MuiIconButton-root').click();
  })


});



describe("Delete tab", ()=> {


  it('Delete Student Flow', ()=>{
    cy.get('#ag-32-input').click();

    cy.get('.css-3dt1v3 > :nth-child(4)').click();
    cy.get('.Lms_actionStyle__ZzOMM > .MuiButton-contained').click();

  })
  it('Delete cancel Flow', ()=>{
    cy.get('#ag-32-input').click();

    cy.get('.css-3dt1v3 > :nth-child(4)').click();
    cy.get('.MuiButton-outlined').click();

  })
});


describe('Filter',()=>{

  it('Select all apply',()=>{
    cy.get('.css-bod7wa-MuiButtonBase-root-MuiButton-root').click();
    cy.get('.MuiTypography-root').contains('Select All').prev().find('.PrivateSwitchBase-input').click();
    cy.get('.css-1qih1uj > .MuiButtonBase-root').click();
   
  });
  it('Select all clear',()=>{
    cy.get('.css-bod7wa-MuiButtonBase-root-MuiButton-root').click();
    cy.get('.MuiTypography-root').contains('Select All').prev().find('.PrivateSwitchBase-input').click();
    cy.get('.Lms_filterActionStyle__gYCGJ > .MuiButtonBase-root').click();
   
  });
  it('Sales Employee Apply',()=>{
    cy.get('.css-bod7wa-MuiButtonBase-root-MuiButton-root').click();
    cy.get('.MuiTypography-root').contains('Kavita Pankaj Pawar').prev().find('.PrivateSwitchBase-input').click();
    cy.get('.css-1qih1uj > .MuiButtonBase-root').click();
    // Click on other checkboxes
    // cy.get('.MuiTypography-root').contains('Kavita Pankaj Pawar').prev().find('.PrivateSwitchBase-input').click();
    // cy.get('.MuiTypography-root').contains('Krutika Rushi Rushi').prev().find('.PrivateSwitchBase-input').click();
    // cy.get('.MuiTypography-root').contains('Disha shah').prev().find('.PrivateSwitchBase-input').click();

  });
  it('Sales Employee clear',()=>{
    cy.get('.css-bod7wa-MuiButtonBase-root-MuiButton-root').click();
    cy.get('.MuiTypography-root').contains('Kavita Pankaj Pawar').prev().find('.PrivateSwitchBase-input').click();
    cy.get('.Lms_filterActionStyle__gYCGJ > .MuiButtonBase-root').click();
    // Click on other checkboxes
    // cy.get('.MuiTypography-root').contains('Kavita Pankaj Pawar').prev().find('.PrivateSwitchBase-input').click();
    // cy.get('.MuiTypography-root').contains('Krutika Rushi Rushi').prev().find('.PrivateSwitchBase-input').click();
    // cy.get('.MuiTypography-root').contains('Disha shah').prev().find('.PrivateSwitchBase-input').click();

  });

  it('Date wise Filter',()=>{

    cy.get('.css-bod7wa-MuiButtonBase-root-MuiButton-root').click();

    cy.get('.MuiTypography-root').contains('From:').next().find('input').type("2024-01-01");

    // Type the date into the "To" input field
    cy.get('.MuiTypography-root').contains('To:').next().find('input').type("2024-02-26");
    cy.get('.Lms_filterActionStyle__gYCGJ > .MuiButtonBase-root').click();
    
  });
  it('Date wise clear',()=>{
    cy.get('.css-bod7wa-MuiButtonBase-root-MuiButton-root').click();
    cy.get('.MuiTypography-root').contains('From:').next().find('input').type("2024-01-01");

    // Type the date into the "To" input field
    cy.get('.MuiTypography-root').contains('To:').next().find('input').type("2024-02-26");
    cy.get('.Lms_filterActionStyle__gYCGJ > .MuiButtonBase-root').click();
  
  });



});





describe('Follow up View',()=>{

it('Follow up view filter',()=>{

  cy.get('[src="https://res.cloudinary.com/dxlzzgbfw/image/upload/v1704436666/Frame_1188_czpqp9.svg"]').click();
  cy.contains('p', 'From') // Find the <p> element containing the text "From"
  .next() // Select the next sibling element
  .find('input[id=":r8:"]') // Find the input element with the specified id
  .type("2020-01-01"); // Type the desired value into the input field


  cy.contains('p', 'To ') // Find the <p> element containing the text "From"
  .next() // Select the next sibling element
  .find('input[id=":r9:"]') // Find the input element with the specified id
  .type("2024-03-03"); // Type the desired value into the input field


});

it('Follow up view filter Cancel',()=>{

  cy.get('[src="https://res.cloudinary.com/dxlzzgbfw/image/upload/v1704436666/Frame_1188_czpqp9.svg"]').click();
  cy.contains('p', 'From') // Find the <p> element containing the text "From"
  .next() // Select the next sibling element
  .find('input[id=":r8:"]') // Find the input element with the specified id
  .type("2020-01-01"); // Type the desired value into the input field


  cy.contains('p', 'To ') // Find the <p> element containing the text "From"
  .next() // Select the next sibling element
  .find('input[id=":r9:"]') // Find the input element with the specified id
  .type("2024-03-03"); // Type the desired value into the input field

  cy.get('.css-fynql > :nth-child(3) > .MuiButtonBase-root').click();
  cy.get('.Lms_closeIcon__y2mUr > .MuiButtonBase-root').click();

});

});


describe('Logout/Signout all',()=>{

  it('Logout',()=>{
     cy.get('.Sidebar_profileMenuStyle__hD8kB').click();
     cy.get('.css-pqkomp-MuiButtonBase-root-MuiMenuItem-root').click();
    

  });

  it('Signout All',()=>{ 
    cy.get('.Sidebar_profileMenuStyle__hD8kB').click();  
    cy.get('.css-4dx015-MuiButtonBase-root-MuiMenuItem-root').click();
    cy.get('.css-10qhops-MuiButtonBase-root-MuiButton-root').click();
    cy.get('.css-jau29b > :nth-child(1)').click();  // cancel signout
  
  });

});


describe('Apply Leaves',()=>{
  it('Full day Leave',()=>{
    cy.get('.Sidebar_profileMenuStyle__hD8kB').click();  
    cy.get('.css-4dx015-MuiButtonBase-root-MuiMenuItem-root').click();
    cy.get('button.MuiTab-root')
    .contains('Leaves')
    .click();


    cy.get('#Leave-dropdown').click();
    cy.get('[data-value="SICK"]').click();

    cy.get('#LeaveMethod-dropdown').click();
    cy.get('[data-value="fullDay"]').click();

    cy.contains('p','Start Date')
    .next()
    .find('input[name="start"]')
    .type('2024-02-26');

    cy.contains('p','End Date')
    .next()
    .find('input[name="end"]')
    .type('2024-02-29');

    cy.get(':nth-child(6) > .MuiInputBase-root').type("Dev Darshan");
    cy.get('.css-5flwkf > .MuiButtonBase-root').click();
  });


  it('Half day Leave',()=>{
    cy.get('.Sidebar_profileMenuStyle__hD8kB').click();  
    cy.get('.css-4dx015-MuiButtonBase-root-MuiMenuItem-root').click();
    cy.get('button.MuiTab-root')
    .contains('Leaves')
    .click();


    cy.get('#Leave-dropdown').click();
    cy.get('[data-value="SICK"]').click();

    cy.get('#LeaveMethod-dropdown').click();
    cy.get('[data-value="halfDay"]').click();

    cy.contains('p','Start Date')
    .next()
    .find('input[name="start"]')
    .type('2024-02-26');

    cy.contains('p','Start Time')
    .next()
    .find('input[name="startTime"]')
    .type('13:00');
    cy.contains('p','End Time')
    .next()
    .find('input[name="endTime"]')
    .type('20:00');
    cy.get(':nth-child(6) > .MuiInputBase-root').type("Dev Darshan");
    cy.get('.css-5flwkf > .MuiButtonBase-root').click();
  });
  

});