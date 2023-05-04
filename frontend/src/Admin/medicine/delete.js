import React ,{useState} from "react";
import "../Dashboard.css";
import Header2 from "../Header2";
import myImage from "../lo.png";
import dashboard from "../svg-6.svg";
const Dashboard = () => {
  const [MEDS, onDelete] = useState([
    { id: 1, Name_MEDS: "PANADOL" },
    { id: 2, Name_MEDS: "Acetaminophen" },
    { id: 3, Name_MEDS: "Ativan" },
  ]);


  return (
    <>
      <Header2 />

      <div class="container-fluid documentation">
        <div className="row">
          <div className="col-md-3 col-xl-2 left-sidebar">
            <div className="logo-wrapper">
            </div>
            <h3>Welcome Admin</h3>

            <ul className="left-menu">
              <li>
                <a href="#introduction"> Introduction </a>
              </li>
              <li>
                <a href="/form"> Manage Patient </a>
              </li>
            </ul>
            {/* <h6 className="left-menu-title">Installation</h6> */}
            <ul className="left-menu">
              <li>
                <a href="/list-patient"> Request Patient </a>
              </li>
              <ul className="left-menu">
              <li>
                <a href="http://localhost:3000/form1">Add</a>
              </li>
              <li>
                <a href="/update-patient3">Update</a>
              </li>
              <li>
                <a href="/delete-patient3">Delete</a>
              </li>
            </ul>
            </ul>
            {/* <h6 className="left-menu-title">Deployment</h6> */}
            <ul className="left-menu">
              <li>
                <a href="http://localhost:3000/delete-patient2"> Categories medicines </a>
              </li>
            </ul>
            {/* <h6 className="left-menu-title">Basic Structure</h6> */}
            <ul className="left-menu">
              <li>
                <a href="/history_of_patient"> History Patient </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9 col-xl-10 main-panel">
            <div className="main-panel-wrapper">
              <div className="video-background2">
                {/* <video autoPlay loop muted>
                  <source src={Video} type="video/mp4" />
                </video> */}
<br/>
<br/>
<br/>
<br/>
<br/>


<table className="patient-list">
                  <thead>
                    <tr>
                      <th>Name_MEDS</th>
                      <th>NUM</th>
                      <th>Price</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {MEDS.map((MEDS) => (
                      <tr key={MEDS.id}>
                        <td>{MEDS.Name_MEDS}</td>
                        <td>{MEDS.NUM}</td>
                        <td>{MEDS.Price}</td>
                        <td>
                          <button onClick={() => onDelete(MEDS.id)}>
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
      </div>
    </>
  );
};


export default Dashboard;
