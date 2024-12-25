import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

function UpdateUser () {
    const [user, setUser] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    const [editedUser, setEditedUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    useEffect(() => {
            const fetchUser = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${id}`)
                if (!response.ok) {
                    throw new Error('Error adding the user')
                } 
                    const data = await response.json();
                    console.log(data)
                    setUser(data)
                    setEditedUser({
                        username: data.username,
                        email: data.email,
                        password: data.password
                    })

                } catch (error) {
                    console.log("Error:", error)
                } 
                
            }; fetchUser();
    }, [id])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const handleEditSubmit = async (event) => {
        event.preventDefault();
        console.log(editedUser)

        try {
            const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedUser)
            })
            if (!response.ok) {
                throw new Error('Error adding the user')
                } 
                const updatedData = await response.json();
                console.log(updatedData)
                navigate(`/users/${id}`)

        } catch (error) {
            console.log("Error:", error)
            } 
                
    }; 
        


    return (
        <div>
            <Container>
            <h1>Update User</h1>
          
                    <Form onSubmit={handleEditSubmit}>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Edit User Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="username"
                                placeholder={user.username}
                                value={editedUser.username}
                                onChange={handleChange}
                                />
                                </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Edit User Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder={user.email}
                                value={editedUser.email}
                                onChange={handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Edit User Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password"
                                placeholder={user.password}
                                value={editedUser.password}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
            </Container>
        </div>
    )
}

export default UpdateUser;