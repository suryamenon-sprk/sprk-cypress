export class BatchBtn {
  // Create Employee Tab buttons

  createBthBtn() {
    return cy.get(".batch_create_btn");
  }

  openCourseList() {
    return cy.get("#course").click();
  }
  selectCourse() {
    return cy.get(".MuiAutocomplete-option").first().click();
  }

  fillStartDate(start_date) {
    // Convert the date string to a JavaScript Date object
    const dateObj = new Date(start_date);

    // Format the date as YYYY-MM-DD
    const formattedDate = dateObj.toISOString().split("T")[0];

    // Click on the date input field and type the formatted date
    cy.get('input[name="date"]').click();
    return cy.get('[name="date"]').clear().type(formattedDate);
  }

  openFacultyList() {
    return cy.get("#faculty").click();
  }
  selectFaculty() {
    return cy.get(".MuiButtonBase-root.MuiMenuItem-root").first().click();
  }

  selectWeekDays(weekdays) {
    return weekdays.forEach((day) => {
      cy.get(`.button-${day}`).click();
    });
  }

  filingStartTime(startTime) {
    cy.get('input[name="start_time"]').click();
    return cy.get('[name = "start_time"]').clear().type(`${startTime}`);
  }

  filingEndtime(endTime) {
    cy.get('input[name="end_time"]').click();
    return cy.get('[name = "end_time"]').clear().type(`${endTime}`);
  }

  previewBtn() {
    return cy.get("#preview-batch").click();
  }

  submitBtn() {
    return cy.get("#submit-btn").click();
  }

  okbtn() {
    return cy.get(".swal-button.swal-button--confirm").click();
  }
  backBth() {
    return cy.get("#back-btn-createBatch").click();
  }
}
