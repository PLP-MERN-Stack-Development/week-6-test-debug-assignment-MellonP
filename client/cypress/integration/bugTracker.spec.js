describe('Bug Tracker E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the bug list', () => {
    cy.contains('Bug Tracker').should('be.visible');
  });

  it('should navigate to the add bug form', () => {
    cy.contains('Report New Bug').click();
    cy.url().should('include', '/add');
  });

  it('should create a new bug', () => {
    cy.contains('Report New Bug').click();
    cy.get('input[name="title"]').type('New Bug from Cypress');
    cy.get('textarea[name="description"]').type('Description from Cypress');
    cy.contains('Save').click();
    cy.contains('New Bug from Cypress').should('be.visible');
  });
});