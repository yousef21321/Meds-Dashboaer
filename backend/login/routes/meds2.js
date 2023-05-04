const router = require("express").Router();
const { log } = require("console");
const conn = require("../db/dbConnection");
const util = require("util"); 



router.get("", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  let search = "";
  if (req.query.search) {
    // QUERY PARAMS
    search = `where name LIKE '%${req.query.search}%' or description LIKE '%${req.query.search}%' or category_id  LIKE '%${req.query.search}%'`;
  }
  const medicines = await query(`select * from medicines ${search}`);
  medicines.map((medicine) => {
    medicine.image_url = "http://" + req.hostname + ":4000/" + medicine.image_url;
  });
  res.status(200).json(medicines);
});











// //list-view
// router.get("", async (req, res) => {

//   try {
//     const query = util.promisify(conn.query).bind(conn);
//     const meds = await query(`select * from medicines `);
//     res.status(200).json(meds);

//   } catch (err) {
//     console.log(err);
//   }
// });
// //search-filteration
// router.get("", async (req, res) => {

//   try {
//     const query = util.promisify(conn.query).bind(conn);

//     let search = "";

//     if (req.query.search) {
//       // QUERY PARAMS
//       search = `where name LIKE '%${req.query.search}%' or description LIKE '%${req.query.search}%'`;
//     }

//     const meds = await query(`select * from medicines ${search}`);


//     res.status(200).json(meds);

//   } catch (err) {
//     console.log(err);
//   }
    
  router.get('/search/:query', (req, res) => {
    const { query } = req.params;
    const filteredData = data.filter((item) => {
      // Replace this with your own filter logic
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    res.json(filteredData);
  });



module.exports = router;