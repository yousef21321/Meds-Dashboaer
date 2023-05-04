import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import "../Dashboard.css"
import Header from "../Header2";
import Sidebar from '../sidebar';
function Student2() {
  const [medicines, setmedicines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/meds/')
      .then(res => setmedicines(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/meds/form/`+id);
    } catch (err) {
      console.error(err);
    }
  };
  


  return (<>
    <Header/>

    <div class="container-fluid documentation">
        <div className="row">
          <Sidebar/>
    <div className='FHFGHGr'>
      <div className='YUUYI'>
        <Link to="/form5" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>discribes</th>
               <th>price</th>
               <th>expire_data</th>
               <th>Num category</th>
            </tr>
          </thead>
          <tbody>
            {
            medicines.map((data , i)=> (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>{data.expirationDate}</td>
                <td>{data.category_id}</td>

                {/* <img src={data.image} alt={data.name} /> */}
                <td>
                  <Link to={"/update-patient3/"+data.id} className='btn btn-succes'>Update</Link>
                  <Link className='btn btn-danger ms-2' onClick={ e=>handleDelete(data.id)}>Delete</Link>

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

export default Student2;
