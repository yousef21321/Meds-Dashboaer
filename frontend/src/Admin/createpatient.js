import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { getAuthUser } from "../helper/Storage.js"; // Import the getAuthUser function
import Validation from "../sign/SignupValidatuon.js";
import { setAuthUser } from "../helper/Storage.js";

function Creatpatient() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setphone] = useState("");
  // const [password, setpassword] = useState("");

  // const [status, setstatus] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    // role:"",
    phone:""
  });
      // const user = getAuthUser(); // Get authenticated user from storage

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
          navigate("/form");
          setAuthUser(res.data); // save the sinup in user data in local storage

        })
        .catch((err) => console.log(err));
    }
    // Add logic to handle form submission
  };
  return (
    <div class="container-fluid documentation">
      <div className="row">
       <Sidebar/>
        <div className="FHFGHGr">
          <div className="YUUYI">
            <form onSubmit={handleSubmit}>
              <h2>Add patient</h2>
             
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creatpatient;
