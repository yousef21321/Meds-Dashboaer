import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import Header from "../Header2";
import Sidebar from "../sidebar";
function Student() {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/catogay/")
      .then((res) => setPatient(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/catogay/form2/` + id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />

      <div class="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="FHFGHGr">
            <div className="YUUYI">
              <Link to="/form3" className="btn btn-success">
                Add +
              </Link>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>

                    <th>Name</th>
                    <th>description</th>

                    <th>image_url</th>
                  </tr>
                </thead>
                <tbody>
                  {patient.map((data, i) => (
                    <tr key={i}>
                      <td>{data.id}</td>

                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.image_url}</td>

                      <td>
                        <Link
                          to={"/update-cat/" + data.id}
                          className="btn btn-danger"
                        >
                          Update
                        </Link>
                        <Link
                          className="btn btn-danger ms-2"
                          onClick={(e) => handleDelete(data.id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
