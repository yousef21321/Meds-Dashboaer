import { useState } from "react";
import {  useParams } from "react-router-dom";
import "../Dashboard.css";
import Sidebar from "../sidebar";

function UpdateMedicine() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [expirationDate, setExpireDate] = useState("");
  const [image_url, setimage] = useState("");

  const [message, setMessage] = useState("");
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:4000/meds/update/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price,  expirationDate ,image_url}),
    });
    const data = await response.json();
    if (data.error) {
      setMessage("Error updating medicine.");
    } else {
      setMessage("Medicine updated successfully.");
      setName("");
      setDescription("");
      setPrice("");
      setExpireDate("");
    }
  };

  return (
    <div class="container-fluid documentation">
      <div className="row">
        <Sidebar/>
    <div>
    <div className="FHFGHGr">
          <div className="YUUYI">
      <h2>Update Medicine</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="expireDate">Expire Date:</label>
        <input
          type="date"
          id="expireDate"
          value={expirationDate}
          onChange={(e) => setExpireDate(e.target.value)}
        />
        <br />
    <label htmlFor="image">Upload an image:</label>
    <input
        type="file"
        id="image"
        value={image_url}

        onChange={(e) => setimage(e.target.image_url)}
    />

        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    </div>
    </div>
    </div>

  );
}
export default UpdateMedicine;
