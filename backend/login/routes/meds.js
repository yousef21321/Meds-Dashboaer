const express = require("express");
const mysql = require("mysql");
const router = require("express").Router();
const db = require("../db/dbConnection");
const upload = require("../middleware/uploadimages")

router.get("/", (req, res) => {
  const sql = "SELECT * FROM medicines";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");

    // Map over the data array to include the image URL for each medicine
    const medicinesWithImageURLs = data.map((medicine) => {
      return {
        ...medicine,
        image_url: `${req.protocol}://${req.get("host")}/upload/${medicine.image_url}`,
      };
    });

    return res.json(medicinesWithImageURLs);
  });
});

router.post("/create1", (req, res) => {
  const sql =
    "INSERT INTO medicines (Name, Description,category_id, Price, expirationDate ,image_url) VALUES (?)";
  const values = [
    [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.expirationDate,
      req.body.image_url,
      req.body.category_id,

    ],
  ];

  db.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.post("/update/:id", (req, res) => {
  const sql =
    "UPDATE medicines SET Name = ?, Description = ?, Price = ?, expirationDate = ? , image_url = ? WHERE id = ?";
  const values = [
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.expirationDate,
    req.body.image_url,
    req.params.id
  ];

  db.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.delete("/form/:id", (req, res) => {
  const sql = "DELETE FROM medicines WHERE ID = ?";

  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
    





module.exports = router;
