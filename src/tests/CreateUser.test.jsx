import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateUser from '../components/CreateUser';


describe('CreateUser Component', () => {
    test('renders correctly', () => {
        render(
            <CreateUser />
        )

        expect(screen.getByText('Create a New User')).toBeInTheDocument();
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Email Address')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();

        
    })

    it('handles input changes', () => {
        render(
            <CreateUser />
        )

        const usernameInput = (screen.getByLabelText(/Username/i)) 
        const emailInput = (screen.getByLabelText(/Email Address/i)) 
        const passwordInput = (screen.getByLabelText(/Password/i)) 

        fireEvent.change(usernameInput, { target: { value: 'Test Username' } });
        fireEvent.change(emailInput, { target: { value: 'Test Email' } });
        fireEvent.change(passwordInput, { target: { value: 'Test Password' } });

        expect(usernameInput.value).toBe('Test Username');
        expect(emailInput.value).toBe('Test Email');
        expect(passwordInput.value).toBe('Test Password');

    })

    it('Submits the form', () => {
        render(
            <CreateUser />
        )

        fireEvent.click(screen.getByText(/Submit/i));
    })
        
})

