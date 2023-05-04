import "../Admin/Header.css";
import React from "react";
import myImage from '../Admin/lo.png';
import { Link } from "react-router-dom";
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
<>

<header style={styles.header}>
  <nav style={styles.nav}>
    <ul style={styles.navList}>
    <nav className="navbar">

     
      <li ><button onClick={handleLogout}>
      Logout
    </button></li>
      </nav>
    </ul>
  </nav>
</header>


</>

  );
};
const styles = {
  header: {
    backgroundColor: '#ffffff00',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    position: 'right' ,

  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'right',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '1rem',
  },
  navLink: {
    color: '#f5f5f5',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
  },
  navLinkActive: {
    backgroundColor: '#ffffff00',
    color: '#ffffff00',
  },
};

export default Header;
