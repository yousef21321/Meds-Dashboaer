import React from "react";
import "./History.css";
import { useState } from "react";
import axios from "axios";
import Header from "./Header2";
import Sidebar from "./sidebar";
import "./History.css";
import { useEffect } from "react";
import { getAuthUser } from "../helper/Storage";

const App = () => {
  const auth = getAuthUser();
  const [History, setHistory] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setHistory({ ...History, loading: true });
    axios
      .get(`http://localhost:4000/Search2/history/${auth.id}`)
      .then((resp) => {
        setHistory({
          ...History,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setHistory({
          ...History,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [History.reload]);

  return (
    <>
      <Header />
      <div className="container-fluid documentation">
        <div className="row">
          <Sidebar />
          <div className="FHFGHGr">
            <div className="YUUYI">
              {" "}
              <table striped bordered hover className="my-table">
                <thead>
                  <tr>
                    <th> Search Term</th>
                    {/* <th>user_id</th> */}
                  </tr>
                </thead>
                <tbody>
                  {History.results.map((History) => (
                    <tr key={History.id}>
                      <td>{History.searchTerm} </td>
                      {/* <td>{getAuthUser().id }</td> */}
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
};

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Header from "./Header2";
// import Sidebar from "./sidebar";
// import "../Admin/List_patient.js"
// import {getAuthUser} from "../helper/Storage"
// function Student({ requests, users }) {
//   const [patient, setPatient] = useState([]);
//   const[searchTerm ,setsearchTerm]= useState([]);
//   const [Accept, setAccept] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const [patientRes, acceptRes] = await Promise.all([
//         axios.get("http://localhost:4000/patient/searchview"),
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

//                       <th>searchTerm</th>
//                       {/* <th>users ID</th>
//                       <th>search_id</th> */}

//                       {/* <th>quantity</th>
//                       <th>Accept</th> */}

//                     </tr>
//                   </thead>
//                   <tbody>
//                     {patient.map((data, i) => (
//                       <tr key={i}>
//                         <td>{data.searchTerm}</td>
//                         {/* <td>{getAuthUser().id }</td>
//                         <td>{data.search_id}</td> */}

//                         {/* <td>{data.password}</td>

//                         <td>{data.Accept}</td> */}

//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 {/* <table className="table1">
//                   <thead>
//                     <tr>
//                       <th>Accept</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {Accept.map((data, i) => (
//                       <tr key={i}>
//                         <td>{data.Accept}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Student;
