app.get('/medicines', (req, res) => {
    const nameSubstring = req.query.name;
    let query = 'SELECT * FROM meds';
  
    if (nameSubstring) {
      query += ` WHERE name LIKE '%${nameSubstring}%'`
    }
  
    // Retrieve Medicines matching the query from the database and return as JSON
    connection.query(query, (err, medicines) => {
      if (err) throw err;
      res.json(medicines);
    });
  });