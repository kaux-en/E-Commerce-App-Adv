import React from 'react'
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Login from './components/Login'
import Homepage from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteUser from './components/DeleteUser';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Jewelery from './category/jewelery';
import Electronics from './category/electronics';
import MensClothing from './category/mensClothing';
import WomensClothing from './category/womensClothing'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cart from './components/Cart';

function App() {


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
          <Route path='/Cart' element={<Cart />} />
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

