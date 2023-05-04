const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const router = require("express").Router();
const db = require("../db/dbConnection");
const util = require("util"); 

// const app = express();
// app.use(express.json());

// app.use(cors());

router.get("/", (req, res) => {
  const sql = "SELECT * FROM 	request";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { Accept } = req.body;
    const sql = "UPDATE 	request SET Accept = ? WHERE id = ?";
    db.query(sql, [Accept, id], (err, result) => {
      if (err) {
        return res.json("Error");
      }
      if (result.affectedRows === 0) {
        return res.json("No data found for the given id");
      }
      return res.json("Data updated successfully");
    });
  });
});
router.get("/2", (req, res) => {
  const sql = "SELECT * FROM send_request2";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.delete("/form/:id", (req, res) => {
  const sql = "DELETE FROM 	request WHERE ID = ?";

  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

router.post("/accept", (req, res) => {
  const id = req.body.id;
  const acceptValue = req.body.acceptValue || false; // Set default value to false

  const sql = "UPDATE send_request2 SET Accept = ? WHERE id = ?";
  const values = [acceptValue, id];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error updating row in send_request2 table:", err);
      return res.status(500).json("Error updating row");
    }
    return res.json(data);
  });
});

/////////////////////////////////////////////////////////////////////

router.get("/myTrips/:user_id", async (req, res) => {
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
    const request = await query(
      "select *  from request Where user_id= ?",
      req.params.user_id
    );

    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////////////////////////////////////////////////////////////////////

router.get("/accept1", (req, res) => {
  const sql = "SELECT * FROM send_request";

  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
///////////////////////////////////////////////////////////////////////////////
// router.get("/listSpacificMedicine/:id", async (req, res) => {
//   const query = util.promisify(db.query).bind(db);
//   const medicine = await query(
//     "select * from medicines where id=?",
//     req.params.id
//   );
  
//     res.status(404).json({ msg: "medicine not found" });
  
//   // medicine[0].image_url =
//   //   "http://" + req.hostname + ":2000/" + medicine[0].image_url;
//   // res.status(200).json(medicine[0]);
// });

router.get("/listSpacificMedicine/:id", (req, res) => {
  const sql = "SELECT * FROM medicines WHERE id = ?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.json("Error");

    // If no medicine was found with the given id, return a 404 response
    if (data.length === 0) {
      return res.status(404).json({
        msg: "Medicine not found",
      });
    }

    // Include the image URL for the medicine
    const medicineWithImageURL = {
      ...data[0],
      image_url: `${req.protocol}://${req.get("host")}/upload/${data[0].image_url}`,
    };

    return res.json(medicineWithImageURL);
  });
});


module.exports = router;
