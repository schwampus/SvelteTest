import Header from '../../src/lib/components/Header.svelte';

describe('Header component', () => {
  it('renders the title prop in an h1', () => {
    // @ts-expect-error Svelte 5 prop types not compatible yet
    cy.mount(Header, { props: { title: 'Hello Cypress!' } });
    cy.get('h1').should('contain.text', 'Hello Cypress!');
  });

  it('uses correct style for h1', () => {
    // @ts-expect-error Svelte 5 prop types not compatible yet
    cy.mount(Header, { props: { title: 'Style test' } });
    cy.get('h1').should('have.css', 'font-size', '64px'); // 4rem = 64px default
  });
});