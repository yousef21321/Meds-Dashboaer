// import "./Header.css";
// import React from "react";
// import { Link } from "react-router-dom";
// import { removeAuthUser ,removeAuthmeds,removecat1} from '../helper/Storage.js';

// const Header2 = () => {
  
//   const handleLogout = () => {
//     removeAuthUser();
//     removeAuthmeds();
//     removecat1();
//     // Navigate to the login page or homepage
//     // For example:
//     window.location.href = '/';
//   };
  
//   return (
// <>

// <header className="cssheader" >
//   <nav className="navheader">
//     <ul className="ulheader" >
//     <nav className="navbar3">

//       <li ><Link to="/Admin" className="navbar0" >Admin Home</Link></li>
      
//       <li ><Link  to="/SignUp5" className="navbar0">Add_New_Admin</Link></li>


//       <li ><button  className="navbar0" onClick={handleLogout}>
//       Logout
//     </button></li>
//       </nav>
//     </ul>
//   </nav>
// </header>


// </>

//   );
// };
// export default Header2;
import React from 'react';
import myImage from './lo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../shared/Header.css';
import { removeAuthUser ,removeAuthmeds,removecat1} from '../helper/Storage.js';

const Header = () => {


    const handleLogout = () => {
    removeAuthUser();
    removeAuthmeds();
    removecat1();
    // Navigate to the login page or homepage
    // For example:
    window.location.href = '/';
  };
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand>
        <img src={myImage} alt="My Image" width="30" height="30" className="d-inline-block align-top mr-2" />
        Health Care
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/Admin">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Button  variant="outline-primary" className="mr-2" onClick={handleLogout}>Logout</Button>
          </Nav.Item>
          <Nav.Item>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
