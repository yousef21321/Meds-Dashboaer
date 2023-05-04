import React from 'react';
import myImage from './lo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand>
        <img src={myImage} alt="My Image" width="30" height="30" className="d-inline-block align-top mr-2" />
        My Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Button as={Link} to="/login" variant="outline-primary" className="mr-2">Login</Button>
          </Nav.Item>
          <Nav.Item>
            <Button as={Link} to="/signup" variant="primary">Sign Up</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
