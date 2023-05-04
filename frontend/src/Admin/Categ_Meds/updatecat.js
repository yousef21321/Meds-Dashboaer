
////////////////////////
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../sidebar";

function Updatepatient() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setphone] = useState("");
  // const [password, setpassword] = useState("");
  // const [status, setstatus] = useState("");
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  
  const { id } = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/catogay/update/`+ id, { name, description });
      console.log(response.data); 
      setName("");
      setdescription("");
    } catch (error) {
      console.error(error);
    }
  };
  

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
      description:
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </label>
      <button type="submit">Update catogay</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatepatient;
