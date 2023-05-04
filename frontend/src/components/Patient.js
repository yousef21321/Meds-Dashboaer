import React from "react";
import "../Router.css";
import "../style/patient.css";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
const Service = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Our Services for Patients</h1>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default Service;
