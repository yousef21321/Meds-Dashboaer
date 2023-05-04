const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const router = require("express").Router();
const conn = require("../db/dbConnection")

router.get("/filter", async (req, res) => {
  const { name, id } = req.query;
  
  try {
    const conn = require("../db/dbConnection")
    const query = util.promisify(conn.query).bind(conn);
    
    const user = await query("SELECT * FROM users WHERE id = ?", [id]);
    if (user.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    
    const whereClause = term ? `WHERE name LIKE '%${name}%' ` : "";
    const medicine = await query(`SELECT * FROM medicines ${whereClause}`);
    
    if (medicine.length === 0) {
      return res.status(404).json({ msg: "Medicine not found" });
    }
    
    await query("INSERT INTO search (term, user_id) VALUES (?, ?)", [term, id]);
    
    res.status(200).json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});


// router.get("/filter", async (req, res) => {
//   const query = util.promisify(conn.query).bind(conn);
//   let search = "";
//   if (req.query.search) {
//   search = `where name LIKE '%${req.query.search}%' OR description LIKE '%${req.query.search}%'`;
//   }
//   const user = await query("select * from users where id = ?", [req.query.id]);
//   if (!user.length) {
//   return res.status(404).json({ msg: "User not found" });
//   }
//   const medicine = await query(`select * from medicines ${search}`);
//   const searchTerm = req.query.search;
//   const userId = req.query.id;
//   await query("insert into search (term, user_id) values (?, ?)", [searchTerm, userId]);
//   if(!medicine.length){
//       return res.status(404).json({msg: "Medicine not found"});
//   }
//   res.status(200).json(medicine);
//       });

router.get("/x", (req, res) => {
  const sql = "SELECT * FROM users";
  conn.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.post("/createx", (req, res) => {
  const sql = "INSERT INTO users (Name, Email, Phone,password ,Status) VALUES (?)";
  const values = [[
    req.body.name,
     req.body.email,
      req.body.phone,
      req.body.password,
       req.body.status]];

       conn.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});


router.post("/search12", (req, res) => {
  const sql = "INSERT INTO search (searchTerm , user_id) VALUES (?)";
  const values = [[
    req.body.searchTerm,
    // req.body.search_id, 
    req.body.user_id ,

     ]];

       conn.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
router.get("/searchview", (req, res) => {
  const sql = "SELECT * FROM search";
  conn.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.put("/updatex/:id", (req, res) => {
  const sql = "UPDATE users SET Name = ?, Email = ?, Phone = ?,  WHERE ID = ?";
  const values = [
    req.body.name,
    req.body.password,
    req.body.email,
    req.body.phone,
    req.params.id
  ];

  router.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});






router.delete("/formx/:id", (req, res) => {
    const sql = "DELETE FROM users WHERE ID = ?";
    
    const id = req.params.id;
  
    conn.query(sql, [id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  });
  

  module.exports = router;