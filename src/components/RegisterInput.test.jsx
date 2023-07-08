/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/**
 * skenario testing
 *
 * - RegisterInput component
 * - should handle username typing correctly
 * - should handle email typing correctly
 * - should handle password typing correctly
 * - should call register function when register button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterInput from './RegisterInput';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle username typing correctly', async () => {
    // arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const usernameInput = screen.getByLabelText(/nama/i);

    // action
    await userEvent.type(usernameInput, 'test');

    // assert
    expect(usernameInput).toHaveValue('test');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText(/email/i);

    // action
    await userEvent.type(emailInput, 'test@mailsac.com');

    // assert
    expect(emailInput).toHaveValue('test@mailsac.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = screen.getByLabelText(/password/i);

    // action
    await userEvent.type(passwordInput, '123456');

    // assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = jest.fn();
    render(
      <BrowserRouter>
        <RegisterInput register={mockRegister} />
      </BrowserRouter>
    );

    const usernameInput = screen.getByLabelText(/nama/i);
    await userEvent.type(usernameInput, 'test');
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'test@mailsac.com');
    const passwordInput = screen.getByLabelText(/password/i);
    await userEvent.type(passwordInput, '123456');
    const registerButton = screen.getByRole('button', { name: /register/i });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'test',
      email: 'test@mailsac.com',
      password: '123456',
    });
  });
});
