import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header2";
import Sidebar from "./sidebar";

function Student({ requests, users }) {
  const [patient, setPatient] = useState([]);
  const [req, setRequests] = useState([]);
  const [isAccepted, setIsAccepted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/req/")
      .then((res) => setPatient(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAcceptRequestUser = (requestId) => {
    const req = requests.find((r) => r.id === requestId);
    const user = users.find((u) => u.id === req.userId);
    setPatient([
      ...users.filter((u) => u.id !== user.id),
      { ...user, connections: [...user.connections, req.userId] },
    ]);
    setRequests(requests.filter((r) => r.id !== requestId));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/req/form/` + id);
    } catch (err) {
      console.error(err);
    }
  };
  // const handleClick = () => {
  //   fetch("http://localhost:4000/req/accept", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ Accept: true }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsAccepted(true);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const handleClick = () => {
    fetch("http://localhost:4000/req/accept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Accept: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("Success!");
        console.log(data);
      })
      .catch((error) => {
        setMessage("Error!");
        console.error(error);
      });
  };

  return (
    <>
      <Header />

      <div class="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="FHFGHGr">
            <div className="YUUYI">
              {/* <Link to="/creatpatirnt" className="btn btn-success">
                Add +
              </Link> */}
              <table className="table">
                <thead>
                  <tr>
                    <th>user_id </th>
                    <th>medicine_id </th>

                    <th>created_at</th>
                    <th>quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {patient.map((data, i) => (
                    <tr key={i}>
                      <td>{data.user_id}</td>
                      <td>{data.medicine_id}</td>

                      <td>{data.created_at}</td>
                      <td>{data.password}</td>

                      <td>
                        <Link
                          className="btn btn-danger ms-2"
                          onClick={(e) => handleDelete(data.id)}
                        >
                          Delete
                        </Link>
                        {/* <Link to={"/Accept"} className='btn btn-danger ms-2' onClick={ e=>handleClick(data.id)}>ACCEPT</Link> */}
                        <Link
                          to={"/Accept/" + data.id}
                          className="btn btn-danger"
                        >
                          Accept
                        </Link>

                        {/* <div>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={handleClick}
                          >
                            Accept
                          </button>
                          <p>{message}</p>
                        </div> */}
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
