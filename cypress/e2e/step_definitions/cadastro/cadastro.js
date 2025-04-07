import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Acessar o site automationexercise.com', () => {
    cy.visit('https://automationexercise.com');
});

When('Clicar em "Signup / Login" para cadastrar um novo usuário', () => {
  cy.get('a > img').should('be.visible');
  cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
});

When('Inserir Name e Email', () => {
  cy.get('.signup-form > h2').should('be.visible');
  cy.get('[data-qa="signup-name"]').type('Vittória');
  cy.get('[data-qa="signup-email"]').type('testeemail@uorak.com');
});

When('Inserir Name e Email', () => {
  cy.get('.signup-form > h2').should('be.visible');
  cy.get('[data-qa="signup-name"]').type('Vittória');
  cy.get('[data-qa="signup-email"]').type('testeemail@uorak.com');
});

When('Clicar em "Signup"', () => {
  cy.get('[data-qa="signup-button"]').click();
  cy.get(':nth-child(1) > b').should('be.visible');
});

When('Inserir os campos: Title, Name, Email, Password, Date of birth', () => {
  cy.get('#id_gender1').click();
  cy.get('[data-qa="name"]').clear().type('Vittória');
  cy.get('[data-qa="email"]').should('have.value', 'testeemail@uorak.com');
  cy.get('[data-qa="password"]').type('password');
  cy.get('[data-qa="days"]').select('15');
  cy.get('[data-qa="months"]').select('December');
  cy.get('[data-qa="years"]').select('2000');
});

When('Selecionar o checkbox "Sign up for our newsletter!"', () => {
  cy.get('#newsletter').click();
});

When('Selecionar o checkbox "Receive special offers from our partners!"', () => {
  cy.get('#optin').click();
});

When('Inserir Preencher os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', () => {
  cy.get('[data-qa="first_name"]').type('Vittória');
  cy.get('[data-qa="last_name"]').type('Toledo');
  cy.get('[data-qa="company"]').type('Study');
  cy.get('[data-qa="address"]').type('Rua Button, 8085');
  cy.get('[data-qa="address2"]').type('Rua Bella, 145');
  cy.get('[data-qa="country"]').select('Canada');
  cy.get('[data-qa="state"]').type('São Paulo');
  cy.get('[data-qa="city"]').type('São Paulo');
  cy.get('[data-qa="zipcode"]').type('09716756');
  cy.get('[data-qa="mobile_number"]').type('11978904567');
});

When('Clicar em "Create Account"', () => {
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]').should('be.visible');
});

When('Clicar no botão "Continue"', () => {
  cy.get('[data-qa="continue-button"]').click();
});

Then('O usuário deve ser cadastrado com sucesso', () => {
  cy.get('b').should('have.text', 'Vittória')
});

And('Clicar em "Delete Account"', () => {
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
});

Then('O usuário deve ser deletado com sucesso', () => {
  cy.get('[data-qa="account-deleted"]').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

