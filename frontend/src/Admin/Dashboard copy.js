import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header2";
import Sidebar from "./sidebar";
function Student() {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/patient/x")
      .then((res) => setPatient(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/patient/formx/` + id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />

      <div class="container-fluid documentation">
        <div className="row">
          <Sidebar/>
          <div className="FHFGHGr">
            <div className="YUUYI">
              <Link to="/creatpatirnt" className="btn btn-success">
                Add +
              </Link>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {patient.map((data, i) => (
                    <tr key={i}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.status}</td>
                      <td>
                        <Link
                          to={"/update/" + data.id}
                          className="btn btn-danger"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={(e) => handleDelete(data.id)}
                        >
                          Delete
                        </button>
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
