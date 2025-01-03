import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteUser from '../components/DeleteUser';


describe('DeleteUser', () => {
    it('deletes a user once logged in', () => {
        render(
            <DeleteUser />
        )

        fireEvent.click(screen.getByText(/Delete Account/i))
    })
})