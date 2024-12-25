import Nav from 'react-bootstrap/Nav';
import React from 'react';

function NavBar() {

  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Update User" href='/UpdateUser'>Update</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Create User" href='/CreateUser'>Create User</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Delete User" href='/DeleteUser'>Delete</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Products" href='/Products'>Products</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="Cart" href='/Cart'>Cart</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;