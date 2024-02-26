import "cypress-localstorage-commands";

export function bypassLogin() {    
      cy.setLocalStorage(
        "persist:auth",
        JSON.stringify(
            Cypress.env("auth")
        )
      );

      cy.setLocalStorage(
        "token",
        Cypress.env("token")
      );
}

export function getPortalUrl() {
  return Cypress.env("portal_url")
}

export function skipMSTunnelWarning(url) {
  cy.visit(url) 
  cy.get('.tunnel--dwithport-text22 > span')
    .click()
}