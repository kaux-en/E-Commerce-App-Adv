import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setUserSession } from "../features/UserSession";



function Login() {
    //const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const userSession = useSelector((state) => state.userInfo)


    useEffect(() => {
        const savedUserSession = localStorage.getItem('userSession');
        if (savedUserSession) {
            const parsedUserSession = JSON.parse(savedUserSession);
            dispatch(setUserSession(parsedUserSession));  // Update Redux with the session
            navigate('/home');  // Redirect to home if user is already logged in
        }
    }, [dispatch, navigate]);



    const handleLogin = useCallback(async (event) => {
        event.preventDefault();

        if (!userData.username || !userData.password) {
            setError('All fields are required!');
            return;
        }

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username: `${userData.username}`,
                    password: `${userData.password}`
                })
            });

            if (!response.ok) {
                throw new Error('Login Failed. Try Again.')
                
            } else {
            const userDetails = { name: userData.username, isLoggedIn: true };
            localStorage.setItem('userSession', JSON.stringify(userDetails));
            dispatch(setUserSession(userDetails));
            navigate('/home')
            }

        } catch (error) {
            console.log('Error:', error)
        }

        if (userSession?.isLoggedIn) {
            navigate('/home');
        }

    }, [userData, navigate, dispatch]);


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
            <Container className="vh-100 d-flex">
            <Row className="w-100 justify-content-center align-items-center">
                <Col md={6}>
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
                <Col>
                <img src={'src/assets/eric-ward-7Qxdl2OUAyQ-unsplash.jpg'} className="loginPhoto" alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    )
};

export default Login;