import React, { useState, useEffect } from 'react';

function App() {
  const [meds, setMeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/meds2?name=${searchTerm}`);
      const data = await response.json();
      setMeds(data);
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.name.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search for medication" />
        <button type="submit">Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Price</th>
            <th>image</th>

          </tr>
        </thead>
        <tbody>
          {meds.map((med) => (
            <tr key={med.id}>
              <td>{med.name}</td>
              <td>{med.price}</td>
              <td>{med.image}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
