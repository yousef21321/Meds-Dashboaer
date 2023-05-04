import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { removeAuthUser ,removeAuthmeds,removecat1} from '../helper/Storage.js';

const Header2 = () => {
  
  const handleLogout = () => {
    removeAuthUser();
    removeAuthmeds();
    removecat1();
    // Navigate to the login page or homepage
    // For example:
    window.location.href = '/';
  };
  
  return (
<>

<header className="cssheader" >
  <nav className="navheader">
    <ul className="ulheader" >
    <nav className="navbar3">

      <li ><Link to="/Admin" className="navbar0" >Admin Home</Link></li>
      
      <li ><Link  to="/SignUp5" className="navbar0">Add_New_Admin</Link></li>


      <li ><button  className="navbar0" onClick={handleLogout}>
      Logout
    </button></li>
      </nav>
    </ul>
  </nav>
</header>


</>

  );
};
export default Header2;
