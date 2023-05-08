import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Dashboard.css";
import Header from "../Header2";
import Sidebar from "../sidebar";

const CreateMedicineForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      price,
      expirationDate,
      image_url,
      category_id,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/Auth/meds/create",
        data
      );
      navigate("/form5");
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="FHFGHGr">
            <div className="YUUYI">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="expirationDate">Expiration Date:</label>
                  <input
                    type="date"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="imageUrl">Image URL:</label>
                  <input
                    type="file"
                    id="imageUrl"
                    value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="categoryId">Category ID:</label>
                  <input
                    type="number"
                    id="categoryId"
                    value={category_id}
                    onChange={(e) => setCategoryId(e.target.value)}
                  />
                </div>
                <button type="submit">Create Medicine</button>
                {errors.length > 0 && (
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error.msg}</li>
                    ))}
                  </ul>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMedicineForm;
