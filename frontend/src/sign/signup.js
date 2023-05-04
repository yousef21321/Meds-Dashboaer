// import loc from './images/location.svg'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidatuon.js";
import Footer from "../shared/Footer";
import axios from "axios";
import Video from "./video/video.mp4";
import { setAuthUser } from "../helper/Storage.js";

// import pharma from './images/pharma.png'
// import medicine from './images/medicine.png'
import "./signup.css";
import Header from "../shared/Header";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    // role:"",
    phone:""
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:4000/auth/register/user", values)
        .then((res) => {
          navigate("/login");
          setAuthUser(res.data); // save the sinup in user data in local storage

        })
        .catch((err) => console.log(err));
    }
    // Add logic to handle form submission
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <div className="ccc">
          <div className="ccc">
            <form action="" onSubmit={handleSubmit}>
            {/* <div className="mb-3">
  <label htmlFor="role">
    
    <strong>Kind</strong>
  </label>
  <select  name="role" onChange={handleInput} className="form-select">
    <option value="">Select Kind</option>
    <option value="Patient">Patient</option>
  </select>
  {errors.role && (
    <span className="text-danger">{errors.role}</span>
  )}
</div> */}

              <div className="mb-3">
                <label htmlFor="name">
                  <strong>Name</strong>
                </label>
                <input
                  type="name"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleInput}
                  className="ccc"
                />
                {errors.name && (
                  <span className="text-danger">{errors.name}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="name">
                  <strong>phone</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter phone"
                  name="phone"
                  onChange={handleInput}
                  className="ccc"
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInput}
                  className="cccs"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleInput}
                  className="form-control rounded-0"
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
              <button type="submit" className="ccc">
              Sign up
              </button>
              <p>You agree to our terms and policies</p>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
