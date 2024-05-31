/// <reference types="cypress" />

describe('E2E Tests', () => {
  it('Should load the homepage', () => {
    cy.visit('/');
    cy.contains('Welcome to My App').should('be.visible');
  });

  it('Should navigate to the About page', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Us').should('be.visible');
  });

  it('Should submit a form', () => {
    cy.visit('/');
    cy.get('#name-input').type('John Doe');
    cy.get('#email-input').type('john.doe@example.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Form submitted successfully').should('be.visible');
  });
});
