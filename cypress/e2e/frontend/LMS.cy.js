import { bypassLogin, getPortalUrl, skipMSTunnelWarning } from "../../support/portal";

function sprk_portal(){
  beforeEach(() => {
    bypassLogin(
      Cypress.env("auth").kavita,
      Cypress.env("token").kavita
    )

    const base_url = getPortalUrl() + "/Lms"
    skipMSTunnelWarning(base_url)

    
  });
};

describe(
  "Create Tab",
  () => { sprk_portal();

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
        cy.get('.css-s7t9k3-MuiButtonBase-root-MuiButton-root').click();

        cy.get('input[name="student_firstname"]').type("Pankaj"); // First Name
        cy.get('input[name="student_lastname"]').type("Yadav"); // Last Name
        cy.get('input[name="primary_mobile"]').type("9029167760"); // Phone
        cy.get('input[name="primary_email"]').type("example@example.com"); // Email
        cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();

        cy.get('.carousel-root .slide').eq(1).within(() => {
          // Interact with the first button inside the slide
          cy.get('button').eq(0).click(); // Click on the first button
      }); // <-- Added closing parenthesis for within()
      }
    );
    

    

}); // <-- Added closing parenthesis for describe()

describe('Transfer', ()=>{
  sprk_portal();
  it('Transfer tab flow', ()=> {


    cy.get('#ag-38-input').click();

    cy.get('.css-3dt1v3 > :nth-child(2)').click();
    cy.get('#demo-simple-select').click();
    cy.get('#menu-assigned_user li').eq(0).click();
    cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click()


  })


});


describe("Discard tab",()=>{
  sprk_portal();
  it("Discard tab flow",()=>{

    cy.get('#ag-32-input').click();


    cy.get('.css-3dt1v3 > :nth-child(3)').click();
    cy.get('.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input').eq(1).type("sdfgfds");
    cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root').click();
  })

})