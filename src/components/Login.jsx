import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setUserSession } from "../features/UserSession";


function Login() {
    //const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const userSession = useSelector((state) => state.userInfo)



    const handleLogin = useCallback(async (event) => {
        event.preventDefault();

        if (!userData.username || !userData.password) {
            setError('All fields are required!');
            return;
        }

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username: `${userData.username}`,
                    password: `${userData.password}`
                })
            });

            if (!response.ok) {
                throw new Error('Login Failed. Try Again.')
            }

            //const data = await response.json();
            const userDetails = { name: userData.username, isLoggedIn: true };
            localStorage.setItem('userSession', JSON.stringify(userDetails));
            navigate('/home')

        } catch (error) {
            console.log('Error:', error)
        }

        if (userSession?.isLoggedIn) {
            navigate('/home');
        }



    }, [userData, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    

    //const loggedOut = () => {
        //setIsLoggedIn(false)
        //navigate('/')
    //}


    return (
        <div>
            <Container className="vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100">
                <Col md={6} sm={8}>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="usernameInput" className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={userData.username}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="passwordInput" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={userData.password}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        </div>
    )
};

export default Login;