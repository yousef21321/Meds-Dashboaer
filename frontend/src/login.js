import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidatuon.js";
import Header from "./shared/Header";
import axios from "axios";
import Video from "./video.mp4";
import { setAuthUser } from "./helper/Storage.js";

function Login() {
  const [values, setValues] = useState({
    id:"",
    email: "",
    password: "",
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
        .post("http://localhost:4000/auth/login/user", values)
        // Middleware for admin And Patient

        .then((res) => {
          if (res.data.name === "Admin123Aa") {
            navigate("/Admin");
          } else {
            navigate("/Catogary");
          }
          setAuthUser(res.data); // save the logged in user data in local storage
        })
        .catch((errors) => console.log(errors));
        console.log(values);
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
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
        <div className="nnns">
          <div className="www">
            <h2>Sign-In</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInput}
                  className="eee"
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
                  className="eee"
                />
                
              </div>
              <button type="submit" className="rrr">
                Log in
              </button>
              <p>You agree to our terms and policies</p>
              <Link
                to="/signup"
                className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
              >
                Sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
