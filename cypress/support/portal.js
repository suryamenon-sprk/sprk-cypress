import "cypress-localstorage-commands";

export function bypassLogin(auth, token) {    
      cy.setLocalStorage(
        "persist:auth",
        JSON.stringify(auth)
      );

      cy.setLocalStorage(
        "token",
        token
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