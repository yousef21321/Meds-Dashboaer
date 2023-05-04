// import React, { useState } from "react";
// import axios from "axios";
// import {getAuthUser} from "../helper/Storage"
// const MedicineRequestForm = () => {
//   const [medicines, setMedicines] = useState([]);
//   const [values, setValues] = useState({
//     id:"",  });
//   const [nameOfMedicine, setNameOfMedicine] = useState("");
//   const [user_id, setuser_id] = useState(getAuthUser().id);

//   const [nameOfUser, setNameOfUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageURL, setImageURL] = useState("");
//   const [state, setState] = useState("");
//   const [accept, setAccept] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await axios.post("http://localhost:4000/send/request", {
//         user_id:user_id,
//         name_of_medicine: nameOfMedicine,
//         name_of_user: nameOfUser,
//         password: password,
//         image_url: imageURL,
//         state: state,
//         Accept: accept,
//       });
//       setuser_id(values.id);
//       setNameOfMedicine("");
//       setNameOfUser("");
//       setPassword("");
//       setImageURL("");
//       setState("");
//       setAccept("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="user_id">Name of user_id:</label>
//         <input
//           type="text"
//           id="user_id"
//           value={user_id}
//           onChange={(event) => setuser_id(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="name_of_medicine">Name of medicine:</label>
//         <input
//           type="text"
//           id="name_of_medicine"
//           value={nameOfMedicine}
//           onChange={(event) => setNameOfMedicine(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="name_of_user">Name of user:</label>
//         <input
//           type="text"
//           id="name_of_user"
//           value={nameOfUser}
//           onChange={(event) => setNameOfUser(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="Quantity">Quantity:</label>
//         <input
//           type="Quantity"
//           id="Quantity"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="image_url">Image URL:</label>
//         <input
//           type="text"
//           id="image_url"
//           value={imageURL}
//           onChange={(event) => setImageURL(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="state">State:</label>
//         <input
//           type="text"
//           id="state"
//           value={state}
//           onChange={(event) => setState(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="accept">Accept:</label>
//         <input
//           type="text"
//           id="accept"
//           value={accept}
//           onChange={(event) => setAccept(event.target.value)}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MedicineRequestForm;

/////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";
import { getmeds } from "../helper/Storage";
import { setmeds } from "../helper/Storage.js";
import Header from "./Header2";
import Sidebar from "./sidebar";
const RequestMedicineForm = () => {
  const [medicineId, setMedicineId] = useState(getmeds());
  const [userId, setUserId] = useState(getAuthUser().id);
  const [errorMsg, setErrorMsg] = useState(null);
  const [password, setpassword] = useState("");

  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/send/request", {
        medicine_id: medicineId,
        user_id: userId,
        password: password,
      });
      getmeds(response.data); // save the logged in user data in local storage

      setSuccessMsg(response.data.msg);
      setErrorMsg(null);
    } catch (err) {
      setSuccessMsg(null);
      setErrorMsg(err.response.data.errors[0].msg);
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
    <div>
      {errorMsg && <div className="error">{errorMsg}</div>}
      {successMsg && <div className="success">{successMsg}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Number Medicine:
          <input
            type="text"
            value={medicineId}
            onChange={(e) => setMedicineId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
        </div>
      </div>
      </div>
      </div>

    </>
  );
};

export default RequestMedicineForm;
