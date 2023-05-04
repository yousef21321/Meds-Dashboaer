const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const router = require("express").Router();
const conn = require("../db/dbConnection")

// router.use(cors());


router.get("/y", (req, res) => {
  const sql = "SELECT * FROM users";
  conn.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.put("/yy/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, password,phone,status } = req.body;
  const sql = `UPDATE users SET name=?, email=?, password=?, Phone=? ,Status=?tWHERE id=?`;
  conn.query(sql, [name, email, password, id ,phone,status], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

module.exports = router;