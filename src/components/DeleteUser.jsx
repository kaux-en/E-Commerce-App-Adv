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
        const userToDelete = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${id}`)
                const data = await response.json();

                if (!response.ok) {
                    throw new Error('Error fetching User Account')
                }

                setUser(data);
            } catch (error) {
                console.log('Error:', error)
            }
        }; 
            
        userToDelete();  
    }, [id]);


    const handleDelete = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })   
        if (!response.ok) {
            console.log("Error deleting post")
        } 
        
            navigate('/');
        //else {
          //  setUser(user.filter(user => user.id !== id ))
            //console.log(`${id}:  was deleted`)
            //setShowAlert(false)
        //}   
    } catch (error) {
        console.log("Error:", error)
}}


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
            {buttonPressed && (
            <Alert show={showAlert} variant="secondary">
                <Alert.Heading>Are you sure you want to Delete your Account</Alert.Heading>
                <p>
                Confirm Delete
                </p>
            <hr />
            <button onClick={handleDelete(id)}>Delete Account</button>
            </Alert> ) 
            }
            </div>
        </div>

    )
};

export default DeleteUser;