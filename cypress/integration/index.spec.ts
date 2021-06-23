describe('Counter module', () => {
  it('renders components', () => {
    cy.visit('/');
    cy.get('.container > h1').contains('ui counter');
    cy.get('.minus-button');
    cy.get('.plus-button');
    cy.get('.count-display').should('have.value', 10);
  });
  it('increases count value when click plus-button', () => {
    cy.reload();
    cy.get('.count-display').should('have.value', 10);
    cy.get('.plus-button').click()
      .get('.count-display').should('have.value', 11);
    cy.get('.plus-button').click()
      .get('.count-display').should('have.value', 12);
  });
});
