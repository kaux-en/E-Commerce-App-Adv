import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


function DeleteUser() {
    const [buttonPressed, setButtonPressed] = useState(false);
    const [showAlert, setShowAlert] = useState(false)
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('userSession'));
        
        if (loggedUser) {
            setUser(loggedUser);  // Set logged-in user to state
        } else {
            navigate('/login');  // If no user is logged in, redirect to login page
        }
    }, [navigate]);


    const handleDelete = async () => {
        if (user) {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!response.ok) {
                    throw new Error('Error deleting user account');
                }

                // Remove user session and navigate to the login
                localStorage.removeItem('userSession');
                navigate('/');  // Redirect to login after deletion
            } catch (error) {
                console.log("Error:", error);
            }
        }
    };


    const handleClick = () => {
        setButtonPressed(true);
        setShowAlert(true)
    }


    
    return (
        <div>
            {user ? (
                <div>
                <h1>Welcome, {user.name}</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
                <br />
                <button onClick={() => handleClick}>Delete Account</button>
                </div>
            ) : (
                <p>User Not Loaded</p>
            )
            }
            <div>
            {buttonPressed && showAlert && (
            <Alert variant="secondary">
                <Alert.Heading>Are you sure you want to Delete your Account</Alert.Heading>
                <p>
                Confirm Delete
                </p>
            <hr />
            <button onClick={handleDelete}>Delete Account</button>
            <button variant="secondary" onClick={() => setShowAlert(false)}>Cancel</button>
            </Alert> ) 
            }
            </div>
        </div>

    )
};

export default DeleteUser;