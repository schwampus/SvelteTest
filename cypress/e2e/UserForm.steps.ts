import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the homepage', () => {
  cy.visit('http://localhost:5173');
});

When('the user fills out all form fields', () => {
  cy.get('[data-test-id="input-name"]').type('Sverker Olofsson');
  cy.get('[data-test-id="next-btn-name"]').click();
  cy.get('[data-test-id="input-birthday"]').type('1947-04-14');
  cy.get('[data-test-id="next-btn-birthday"]').click();
  cy.get('[data-test-id="input-pizza"]').type('Margherita');
  cy.get('[data-test-id="next-btn-pizza"]').click();
  cy.get('[data-test-id="input-color"]').invoke('val', '#d41414').trigger('input');
  cy.get('[data-test-id="next-btn-color"]').click();
});

Then('the Thank You message is displayed', () => {
  cy.get('h1').should('contain.text', 'Thank You!');
});

When('the user leaves a question blank and clicks next', () => {
  cy.get('[data-test-id="input-name"]').clear();
  cy.get('[data-test-id="next-btn-name"]').click();
});

Then('an error message is shown', () => {
  cy.get('[data-test-id="error-msg"]').should(
    'contain.text', 
    'Please answer the question before advancing.'
  );
});