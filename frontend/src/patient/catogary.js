import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./Home.css";
import Sidebar from "./sidebar";
import Header from "./Header2";
import "./send_request.css";
import "./MedicineList.css";
import { setAuthmeds } from "../helper/Storage.js";
import { Link } from "react-router-dom";
import { setcat1 } from "../helper/Storage.js";

const Home = () => {
  const [cat, setcat] = useState({       
    loading: true,
    results: [],
    error: null,
  });

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function fetchcat() {
      setcat({ ...cat, loading: true });
      try {
        const response = await axios.get(
          `http://localhost:4000/Search2?search=${searchTerm}`
        );
        setcat({ ...cat, results: response.data, loading: false, error: null });
        setcat1(response.data);
        // setcat1(cat.results[0].id);
        
      } catch (error) {
        setcat({
          ...cat,
          loading: false,
          error: "Something went wrong, please try again later!",
        });
      }
    }
    fetchcat();
  }, [searchTerm]);

 
  function handleClick() {
    localStorage.setItem("selectedCatId", cat.results.id);
  }
  return (
    <>
      <Header />
      <div className="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="home-container p-5">
            {/* Loader  */}
            {cat.loading && (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}

            {/* LIST MEDICINES  */}
            {!cat.loading && cat.error === null && (
              <>
                
                {/* LIST MEDICINES */}
                <div className="row">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.results.map((cat) => (
                        <tr key={cat.id}>
                          <td>{cat.id}</td>
                          <td>{cat.name}</td>
                          <td>{cat.description}</td>
                          <td>
                            <img src={cat.image_url} alt={cat.name} />
                          </td>
                          {/* <td>
          <Link
            to={{
              pathname: "/list-patientpatient/" + cat.id,
              state: { medicine: cat },
            }}
          >
            Request
          </Link>
        </td> */}
                         
                        </tr>
                      ))}
                    </tbody>
                    <Link
      to={'/patient3/' + cat.id}
      className="btn btn-danger"
      onClick={handleClick}
    >
      View All Medicines 
    </Link>
                  </table>
                </div>
              </>
            )}

            {/* ERROR HANDLING */}
            {cat.loading === false && cat.error !== null && (
              <Alert variant="danger" className="p-2">
                {cat.error}
              </Alert>
            )}

            {!cat.loading && cat.results.length === 0 && cat.error === null && (
              <Alert variant="info" className="p-2">
                No medicines found, please try again later!
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
