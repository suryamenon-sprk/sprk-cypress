const buttonCSS = ".MuiButton-containedPrimary"

export class Action {
    getCreateButton() {
        return cy.get(buttonCSS).eq(0)
    }

    getTransferButton() {
        return cy.get(buttonCSS).eq(1)
    }

    getEnquiryCreationModalFieldByName(fieldName) {
        return cy.get(`input[name="${fieldName}"]`);
    }

    getEnquiryCreationModalSubmitButtion() {
        return cy.get('.Lms_buttonBox__sLJ4u > .MuiButtonBase-root');
    }
}


