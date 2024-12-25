import React, { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';


function CreateUser() {
    const url = 'https://fakestoreapi.com/users'
    const [users, setUsers] = useState([])
    const [newUserData, setNewUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUserData)
                });
    
            if (!response.ok) {
                throw new Error('Error adding the user')
            } 
    
            const data = await response.json()
            console.log(data)
            setUsers([data, ...users])
            setNewUserData({ username: '', email: '', password: ''})
       
            } catch (error) {
                console.log('Error:', error.message)
            }        
        };
        

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUserData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    };


    return (
        <Container>
            <h1>Create a New User</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="username" 
                    name="username"
                    placeholder="Enter username"
                    value={newUserData.username}
                    onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email"
                    value={newUserData.email}
                    onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                placeholder="Password"
                value={newUserData.password}
                onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        </Container>
    )
};

export default CreateUser;