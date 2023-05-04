// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Header from "./Header2";
// import Sidebar from "./sidebar";
// import { getAuthUser } from "../helper/Storage";

// import "../Admin/List_patient.js"
// function Student({ requests, users }) {
//   const [patient, setPatient] = useState([]);
//   const[searchTerm ,setsearchTerm]= useState([]);
//   const [search, setAccept] = useState([]);
//   const auth = getAuthUser();

//   useEffect(() => {
//     const fetchData = async () => {
//       const [patientRes, acceptRes] = await Promise.all([
//         axios.get(`http://localhost:4000/req/myTrips/${auth.id}`),
//         axios.get("http://localhost:4000/req/accept1"),
//       ]);
//       setPatient(patientRes.data);
//       setAccept(acceptRes.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container-fluid documentation">
//         <div className="row">
//           <Sidebar />
//           <div className="FHFGHGr">
//             <div className="YUUYI">
//               <div>
//                 <table className="table">
//                   <thead>
//                     <tr>

//                       <th>medicine_id</th>
//                       <th>quantity</th>
//                       <th>Accept</th>

//                       {/* <th>quantity</th>
//                       <th>Accept</th> */}

//                     </tr>
//                   </thead>
//                   <tbody>
//                     {patient.map((data, i) => (
//                       <tr key={i}>
//                         <td>{data.medicine_id}</td>
//                         <td>{data.password}</td>

//                         <td>{data.Accept}</td>

//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Student;
import React from "react";
import Header from "./Header2";
import Sidebar from "./sidebar";
// import "./YourTrip.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";
import { Link } from "react-router-dom";

const YourTrip = () => {
  const auth = getAuthUser();
  const [appointments, setAppointments] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setAppointments({ ...appointments, loading: true });
    axios
      .get(`http://localhost:4000/Search2/req/${auth.id}`)
      .then((resp) => {
        setAppointments({
          ...appointments,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setAppointments({
          ...appointments,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [appointments.reload]);

  return (
        <>
      <Header />
      <div className="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="FHFGHGr">
            <div className="YUUYI">
      <table striped bordered hover className="my-table">
        <thead>
          <tr>
             <th>medicine_id</th>
             <th>quantity</th>
             <th>Accept</th>
          </tr>
        </thead>
        <tbody>
          {appointments.results.map((data) => (
            <tr key={data.id}>
              <td>{data.medicine_id}</td>
               <td>{data.password}</td>
               <td>{data.Accept}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div></div></div></div>
    </>
  );
};

export default YourTrip;
