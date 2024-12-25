import React, { useEffect } from 'react'
import { useDispatch, Provider } from 'react-redux';
import store from './store'
import { setUserSession } from './features/UserSession';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Login from './components/Login'
import Homepage from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteUser from './components/DeleteUser';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Jewelery from './category/Jewelery';
import Electronics from './category/Electronics';
import MensClothing from './category/MensClothing';
import WomensClothing from './category/WomensClothing';
import './App.css'
import Cart from './components/Cart';

function App() {
/*  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the user session in localStorage
    const storedUser = localStorage.getItem('userSession');
    if (storedUser) {
      const userSession = JSON.parse(storedUser);
      dispatch(setUserSession(userSession));  // Dispatch to Redux store
      navigate('/Home');
    } else {
      navigate('/');
    }
  }, [dispatch, navigate]);  */

  return (
    <>
    <NavBar />
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Homepage />} /> 
          <Route path='/CreateUser' element={<CreateUser />} />
          <Route path='/UpdateUser' element={<UpdateUser />} />
          <Route path='/DeleteUser' element={<DeleteUser />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/carts' element={<Cart />} />
          <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/jewelery" element={<Jewelery />} />
          <Route path="/category/mensclothing" element={<MensClothing /> } />
          <Route path="/category/womensclothing" element={<WomensClothing />} />
        </Routes>
      </Router>
    </Provider>
    </>
  )
};

export default App;

