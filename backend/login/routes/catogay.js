const express = require("express");
const mysql = require("mysql");
const router = require("express").Router();
const conn = require("../db/dbConnection");
const util = require("util"); 

// const cors = require("cors");

// const app = express();
// app.use(express.json());

// app.use(cors());


router.get("/", (req, res) => {
  
  const sql = "SELECT * FROM categoryes";
  conn.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.post("/create", (req, res) => {
  const sql = "INSERT INTO categoryes (Name, Description) VALUES (?)";
  const values = [[
    req.body.name,
     req.body.description
     ]];

     conn.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
router.put("/update/:id", (req, res) => {
  const sql = "UPDATE categoryes SET Name = ?, description = ? ,image_url=? WHERE ID = ?";
  const values = [
    req.body.name,
    req.body.description,
    req.body.image_url,
    req.params.id

  ];

  conn.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});


 





router.delete("/form2/:id", (req, res) => {
    const sql = "DELETE FROM categoryes WHERE ID = ?";
    
    const id = req.params.id;
  
    conn.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });
  
  // router.get("", async (req, res) => {
  //   const query = util.promisify(conn.query).bind(conn);
  //   let search = "";
  //   if (req.query.search) {
  //     // QUERY PARAMS
  //     search = `where name LIKE '%${req.query.search}%' or description LIKE '%${req.query.search}%'`;
  //   }
  //   const categoryes = await query(`select * from categoryes ${search}`);
    
  //   res.status(200).json(categoryes);
  // });
  

/////////////////////
router.post("/search2", (req, res) => {
  const sql = "INSERT INTO search (searchTerm) VALUES (?)";
  const values = [[
    req.body.searchTerm,
    // req.body.user_id ,

     ]];

       conn.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});


router.get('/medicines/category/:category_id', function(req, res) {
  const category_id = req.params.category_id;

  // Define the query to retrieve all medicines with a given category_id
  const getMedicinesQuery = `
    SELECT * FROM medicines2
    WHERE category_id = ?
  `;

  // Execute the query using the MySQL pool
  conn.query(getMedicinesQuery, [category_id], function(error, results, fields) {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else {
      res.status(200).json(results);
    }
  });
});





  
  module.exports = router;