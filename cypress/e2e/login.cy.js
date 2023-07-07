/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/**
 * - Login spec
 *  - should display login page correctly
 *  - should display alert when email address is empty
 *  - should display alert when password is empty
 *  - should display alert when email address and password are wrong
 *  - should display homepage when email address and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });

  it('should display alert when email address is empty', () => {
    // klik tombol login tanpa mengisi email address
    cy.get('button')
      .contains(/^Login$/)
      .click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[type="email"]').type('andi@mailsac.com');

    // klik tombol login tanpa mengisi password
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email address and password are wrong', () => {
    // mengisi username
    cy.get('input[type="email"]').type('andi@mailsac.com');

    // mengisi password yang salah
    cy.get('input[type="password"]').type('pass123');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email address or password is wrong');
    });
  });

  it('should display homepage when email address and password are correct', () => {
    // mengisi username
    cy.get('input[type="email"]').type('andi@mailsac.com');

    // mengisi password
    cy.get('input[type="password"]').type('pass1234');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav').should('be.visible');
  });
});
