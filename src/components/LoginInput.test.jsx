/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/**
 * skenario testing
 *
 * - LoginInput component
 * - should handle email typing correctly
 * - should handle password typing correctly
 * - should call login function when login button is clicked
 */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import LoginInput from './LoginInput';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText(/email/i);

    // action
    await userEvent.type(emailInput, 'andi@mailsac.com');

    // assert
    expect(emailInput).toHaveValue('andi@mailsac.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText(/password/i);

    // action
    await userEvent.type(passwordInput, '123456');

    // assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(
      <BrowserRouter>
        <LoginInput login={mockLogin} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'andi@mailsac.com');
    const passwordInput = await screen.getByLabelText(/password/i);
    await userEvent.type(passwordInput, '123456');
    const loginButton = await screen.getByRole('button', { name: /login/i });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'andi@mailsac.com',
      password: '123456',
    });
  });
});
