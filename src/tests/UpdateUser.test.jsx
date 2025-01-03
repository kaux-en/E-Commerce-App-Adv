import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateUser from '../components/CreateUser';


describe('UpdateUser Component', () => {
    test('renders correctly', () => {
        render(
            <UpdateUser />
        )

        expect(screen.getByText('Update User')).toBeInTheDocument();
        expect(screen.getByText('Update User Username')).toBeInTheDocument();
        expect(screen.getByText('Update User Email')).toBeInTheDocument();
        expect(screen.getByText('Update User Password')).toBeInTheDocument();

        
    })

    it('handles input changes', () => {
        render(
            <UpdateUser />
        )

        const usernameInput = (screen.getByLabelText(/Update User Username/i)) 
        const emailInput = (screen.getByLabelText(/Update User Email/i)) 
        const passwordInput = (screen.getByLabelText(/Update User Password/i)) 

        fireEvent.change(usernameInput, { target: { value: 'Test Updated Username' } });
        fireEvent.change(emailInput, { target: { value: 'Test Updated Email' } });
        fireEvent.change(passwordInput, { target: { value: 'Test Updated Password' } });

        expect(usernameInput.value).toBe('Test Updated Username');
        expect(emailInput.value).toBe('Test Updated Email');
        expect(passwordInput.value).toBe('Test Updated Password');

    })

    it('Submits the form', () => {
        render(
            <UpdateUser />
        )

        fireEvent.click(screen.getByText(/Save Changes/i));
    })
        
})