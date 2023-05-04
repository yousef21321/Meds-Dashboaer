
const express = require("express");
const mysql = require("mysql");
const router = require("express").Router();
const conn = require("../db/dbConnection");
const util = require("util"); 

router.get("", async (req, res) => {
    const query = util.promisify(conn.query).bind(conn);
    let search = "";
    if (req.query.search) {
      // QUERY PARAMS
      search = `where name LIKE '%${req.query.search}%' or description LIKE '%${req.query.search}%'`;
    }
    const categoryes = await query(`select * from categoryes ${search}`);
    categoryes.map((cat) =>{
      cat.image_url = "http://" + req.hostname + ":4000/" + cat.image_url;
    });
    res.status(200).json(categoryes);
  });

  router.get(
    "/history/:user_id",
    async (req, res) => {
      try {
        const query = util.promisify(conn.query).bind(conn);
        // 2- CHECK IF USER EXISTS OR NOT
        const user = await query("select * from users where id = ?", [
          req.params.user_id,
        ]);
        if (!user[0]) {
          res.status(404).json({ ms: "user not found !" });
        }
  
        // 4- INSERT APPOINTMENT OBJECT INTO DATABASE
        const request =await query("select *  from search Where user_id= ?", req.params.user_id);
  
        res.status(200).json(request);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );


  router.get(
    "/req/:user_id",
    async (req, res) => {
      try {
        const query = util.promisify(conn.query).bind(conn);
        // 2- CHECK IF USER EXISTS OR NOT
        const user = await query("select * from users where id = ?", [
          req.params.user_id,
        ]);
        if (!user[0]) {
          res.status(404).json({ ms: "user not found !" });
        }
  
        // 4- INSERT APPOINTMENT OBJECT INTO DATABASE
        const request =await query("select *  from request Where user_id= ?", req.params.user_id);
  
        res.status(200).json(request);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );
  module.exports = router;