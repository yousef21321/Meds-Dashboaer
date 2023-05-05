import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuthUser } from "../helper/Storage";
const Sidebar = () => {
const auth = getAuthUser().name
  // function Welcome(props) {
  //   return <h1>Welcome, {props.auth}!</h1>;
  // }
  
    const [name, setname] = useState("");
  
    useEffect(() => {
      axios.get('http://localhost:4000/user') // replace this with the API endpoint that retrieves the user's name from the database
        .then(response => setname(response.data.name))
        .catch(error => console.log(error));
    }, []);
  return (
    <div className="col-md-3 col-xl-2 left-sidebar">
      <div className="logo-wrapper">
        <div className="sidebar">
          <div className="logo-wrapper">
            {/* <img src={myImage} alt="My Image" className="logo" /> */}
          </div>
          {/* <h3 className="sidebar-title">Welcome Admin</h3> */}
          {/* {name ? <Welcome name={name} /> : <p>Loading...</p>} */}
          <h3 className="sidebar-title">Welcome {auth}</h3>

      {/* other registration components */}
          <ul className="sidebar-menu">
            <li>
              <Link to={"/Catogary"}>  view Catogary</Link>
            </li>
           
            <li>
              <Link to={"/History2"}>History medicine</Link>
            </li>
            <li>
              <Link to={"/History3"}>Request medicine</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



