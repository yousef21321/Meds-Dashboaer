import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function UpdatePatient() {
  const [Accept, setAccept] = useState("");
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Accept) return; // Prevent submitting if accept value is empty
    try {
      const response = await fetch(`http://localhost:4000/req/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Accept }),
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
              <h2>Update Categ_Meds</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="accept">Accept:</label>
                <input
                  type="text"
                  id="Accept"
                  value={Accept}
                  onChange={(e) => setAccept(e.target.value)}
                />
                <button type="submit">Update</button>
                <Link to="/list-patient">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePatient;
