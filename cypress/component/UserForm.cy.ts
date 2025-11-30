import UserForm from '../../src/lib/components/UserForm.svelte';

describe('UserForm component', () => {
  it('renders the intro and first step', () => {
     // @ts-expect-error Svelte 5 prop types not compatible yet
    cy.mount(UserForm);
    cy.get('h2').should('contain.text', 'Lets get to know each other!');
    cy.get('[data-test-id="input-name"]').should('exist');
  });

  it('throws error when trying to advance with blank inputnp', () => {
    // @ts-expect-error Svelte 5 prop types not compatible yet
    cy.mount(UserForm);
    cy.get('[data-test-id="next-btn-name"]').click();
    cy.get('[data-test-id="error-msg"]')
      .should('contain.text', 'Please answer the question before advancing.');
  });

  it('walks through all questions and shows Thank You at end', () => {
    // @ts-expect-error Svelte 5 prop types not compatible yet
    cy.mount(UserForm);

    cy.get('[data-test-id="input-name"]').type('Jul Tomten');
    cy.get('[data-test-id="next-btn-name"]').click();

    cy.get('[data-test-id="input-birthday"]').type('1999-12-24');
    cy.get('[data-test-id="next-btn-birthday"]').click();

    cy.get('[data-test-id="input-pizza"]').type('Godis-Pizza');
    cy.get('[data-test-id="next-btn-pizza"]').click();

    cy.get('[data-test-id="input-color"]').invoke('val', '#ff6600').trigger('input');
    cy.get('[data-test-id="next-btn-color"]').click();

    cy.get('h1').should('contain.text', 'Thank You!');
    cy.get('[data-test-id="start-over-btn"]').should('exist');
  });
});