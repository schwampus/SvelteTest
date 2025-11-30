describe('E2E-tests for SVLTST', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
   });

it('Should display the page title', () => {
    cy.get('h1').should('contain.text', 'SVLTST');

  })
  
it('should display h2 with hello jon', () => {
    cy.get('h2').should('contain.text', 'Hello Jon!');
  });

it('should change name in greeting after a new name is typed', () => {
    cy.get('[data-test-id="greet-input').clear().type('Vanja');
    cy.get('h2').should('contain.text', 'Hello Vanja!');

});
  
it('renders the first question and input', () => {
    cy.get('h2').should('contain.text', 'Lets get to know each other!');
    cy.get('[data-test-id="input-name"]').should('exist');
    cy.get('[data-test-id="next-btn-name"]').should('exist');
  });

it('goes thru the form without causing errors', () => {
    cy.get('[data-test-id="input-name"]').type('Sverker Olofsson');
    cy.get('[data-test-id="next-btn-name"]').click();
   
    cy.get('[data-test-id="input-birthday"]').type('1947-04-14');
    cy.get('[data-test-id="next-btn-birthday"]').click();
    
    cy.get('[data-test-id="input-pizza"]').type('Margherita');
    cy.get('[data-test-id="next-btn-pizza"]').click();
    
    cy.get('[data-test-id="input-color"]').invoke('val', '#d41414').trigger('input');
    cy.get('[data-test-id="next-btn-color"]').click();

    
    cy.get('h1').should('contain.text', 'Thank You!');
    cy.get('[data-test-id="start-over-btn"]').should('exist');
  });
  

it('shows an error if when trying to advance with empty input', () => {
    cy.get('[data-test-id="input-name"]').should('exist').clear();
    cy.get('[data-test-id="next-btn-name"]').click();
    cy.get('[data-test-id="error-msg"]').should(
      'contain.text', 
      'Please answer the question before advancing.'
    );
  });

it('can answer all questions and return to start', () => {
   
    cy.get('[data-test-id="input-name"]').type('Lennart Jähkel');
    cy.get('[data-test-id="next-btn-name"]').click();
    cy.get('[data-test-id="input-birthday"]').type('1956-09-27');
    cy.get('[data-test-id="next-btn-birthday"]').click();
    cy.get('[data-test-id="input-pizza"]').type('Kebab med starksås');
    cy.get('[data-test-id="next-btn-pizza"]').click();
    cy.get('[data-test-id="input-color"]').invoke('val', '#33a398ff').trigger('input');
    cy.get('[data-test-id="next-btn-color"]').click();

    cy.get('[data-test-id="start-over-btn"]').click();
    cy.get('h1').should('contain.text', 'Step: 1');
    cy.get('[data-test-id="input-name"]').should('exist');
  });

it('throw an error at the third step', () => {
    cy.get('[data-test-id="input-name"]').type('Sverker Olofsson');
    cy.get('[data-test-id="next-btn-name"]').click();
   
    cy.get('[data-test-id="input-birthday"]').type('1947-04-21');
    cy.get('[data-test-id="next-btn-birthday"]').click();
    
    cy.get('[data-test-id="input-pizza"]').should('exist').clear();
    cy.get('[data-test-id="next-btn-pizza"]').click();
    cy.get('[data-test-id="error-msg"]').should('contain.text', 
    'Please answer the question before advancing.');
  });
});