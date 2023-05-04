import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-md-3 col-xl-2 left-sidebar">
      <div className="logo-wrapper">
        <div className="sidebar">
          <div className="logo-wrapper">
            {/* <img src={myImage} alt="My Image" className="logo" /> */}
          </div>
          <h3 className="sidebar-title">Welcome Admin</h3>

          <ul className="sidebar-menu">
            <li>
              <Link to={"#introduction"}> Introduction</Link>
            </li>
            <li>
              <Link to={"/form"}> Manage Patient</Link>
            </li>
            <li>
              <Link to={"/list-patient"}> Request Patient</Link>
            </li>
            <li>
              <Link to={"/managemedicine"}> Manage medicines</Link>
            </li>
            <li>
              <Link to={"/delete-patient2"}> Categories medicines </Link>
            </li>
            <li>
              <Link to={"/history_of_patient"}> History Patient</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;