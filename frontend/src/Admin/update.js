import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./sidebar";

function Updatepatient() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setphone] = useState("");
  // const [password, setpassword] = useState("");
  // const [status, setstatus] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   // role:"",
  //   phone:""
  // });
  const { id } = useParams();
  // const navigate = useNavigate();

  // const [errors, setErrors] = useState({});
  // const handleInput = (event) => {
  //   setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/auth/users/`+ id, { name, phone });
      console.log(response.data); // log the response data to the console
      // clear the form input fields
      setName("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .put("http://localhost:4000/auth/users/" + id, 
  //       values
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/form");
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <div class="container-fluid documentation">
      <div className="row">
       <Sidebar/>

        <div className="FHFGHGr">
          <div className="YUUYI">
          <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button type="submit">Update User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatepatient;
