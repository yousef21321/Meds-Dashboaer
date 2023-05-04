
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Dashboard.css";
import Header from "../Header2";
import Sidebar from "../sidebar";
import { getAuthUser } from "../../helper/Storage.js";

function CreatePatient2() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    // price: "",
    // expirationDate: "",
    // image_url: "",
  });

  const navigate = useNavigate();
  const user = getAuthUser();

  function handleInputChange(event) {
    console.log(event.target.name, event.target.value);
    const { name, value, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:4000/catogay/create", formData, {
        // headers: {
        //   token: user.token,
        //   "Content-Type": "multipart/form-data",
        // },
      })
      .then((res) => {
        console.log(res);
        navigate("/delete-patient2");
      })
      .catch((err) => console.log(err));
  }
  


  return (
    <>
      <Header />
      <div className="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="FHFGHGr">
            <div className="YUUYI">
              <form onSubmit={handleSubmit}>
                <h2>Add medicine</h2>
                <div className="mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-2">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter Description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  </div>
                {/* </div>
                <div className="mb-2">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Enter Price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div> */}
                {/* <div className="mb-2">
                  <label htmlFor="expirationDate">Expire Date</label>
                  <input
                    type="date"
                    id="expirationDate"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                  />
                </div> */}
                {/* <div className="mb-2">
                  <label htmlFor="image_url">Image URL</label>
                  <input
                    type="file"
                    id="image_url"
                    name="image_url"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div> */}
                <button type="submit" className="btn btn-success">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
   

    </>
  );
}

export default CreatePatient2;
