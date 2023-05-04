import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function UpdatePatient() {
  const [isAccepted, setIsAccepted] = useState(false);
  const { id } = useParams();

  const handleAccept = async () => {
    try {
      const response = await fetch(`http://localhost:4000/req/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Accept: "Accepted" }),
      });
      const data = await response.json();
      console.log(data); // Check the updated data in console
      window.location.href = "/list-patient"; // Redirect to home page after successful update
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await fetch(`http://localhost:4000/req/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Accept: "Declined" }),
      });
      const data = await response.json();
      console.log(data); // Check the updated data in console
      window.location.href = "/list-patient"; // Redirect to home page after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid documentation">
      <div className="row">
        <div>
          <div className="FHFGHGr">
            <div className="YUUYI">
              <h2>Requests_Meds</h2>
              {isAccepted ? (
                <div>
                  <p>You have accepted.</p>
                </div>
              ) : (
                <div>
                  <nav>
                    <ul>
                      <li>
                        <button className='btn btn-succes' onClick={handleAccept}>Accept</button>
                      </li>
                      <li>
                        <button  className='btn btn-danger ms-2' onClick={handleDecline}>Decline</button>
                      </li>
                    </ul>
                  </nav>
                  <form>
                  
                    <Link to="/list-patient">Cancel</Link>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePatient;
