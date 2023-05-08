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
import { getAuthUser, setAuthmeds } from "../helper/Storage.js";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchterm = searchParams.get('searchTerm');

  const [medicines, setMedicines] = useState({
    loading: true,
    results: [],
    error: null,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [user_id, setUserId] = useState(getAuthUser().id);

  useEffect(() => {
    async function fetchMedicines() {
      setMedicines({ ...medicines, loading: true });
      try {
        const response = await axios.get(
          `http://localhost:4000/meds2?search=${searchTerm}`
        );
        setMedicines({
          ...medicines,
          results: response.data,
          loading: false,
          error: null,
        });
        setAuthmeds(response.data);
      } catch (error) {
        setMedicines({
          ...medicines,
          loading: false,
          error: "Something went wrong, please try again later!",
        });
      }
    }
    fetchMedicines();
  }, [searchTerm]);
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/patient/search12",
        {
          searchTerm: searchTerm,
          user_id: user_id,
        }
      );
      console.log(response.data); // optional: log the response from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="home-container p-5">
            {/* Loader  */}
            {medicines.loading && (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}

            {/* LIST MEDICINES  */}
            {!medicines.loading && medicines.error === null && (
              <>
                {/* Filter  */}
                <Form onSubmit={handleSearch}>
                  <Form.Group className="mb-3 d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Search for medicine"
                      className="rounded-0"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button className="btn btn-dark rounded-0" type="submit">
                      Search
                    </button>
                  </Form.Group>
                </Form>

                {/* LIST MEDICINES */}
                <div className="row">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>catogary</th>

                        <th>price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicines.results.map((medicine) => (
                        <tr key={medicine.id}>
                          <td>{medicine.id}</td>
                          <td>{medicine.name}</td>
                          <td>{medicine.description}</td>
                          <td>
                            <img src={medicine.image_url} alt={medicine.name} />
                          </td>
                          <td>{medicine.category_id}</td>
                          <td>{medicine.price}</td>

                          <td>
                            <Link
                             className="btn btn-danger"
                              to={{
                                pathname: "/list-patientpatient/" + medicine.id,
                                
                                state: { medicine: medicine },
                              }}
                            >
                              Request
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* ERROR HANDLING */}
            {medicines.loading === false && medicines.error !== null && (
              <Alert variant="danger" className="p-2">
                {medicines.error}
              </Alert>
            )}

            {!medicines.loading &&
              medicines.results.length === 0 &&
              medicines.error === null && (
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
