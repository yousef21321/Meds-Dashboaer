const router = require("express").Router();
const conn = require("../db/dbConnection");
const { body, validationResult } = require("express-validator");
const util = require("util"); 

router.post(
  "/send",
  body("name_of_medicine")
    .isString()
    .withMessage("please enter a valid name_of_medicine")
    .isLength({ min: 3, max: 255 })
    .withMessage("name_of_medicine should be between (3-255) character"),
  body("name_of_user")
    .isString()
    .withMessage("please enter a valid name_of_user")
    .isLength({ min: 3, max: 20 })
    .withMessage("name_of_user should be between (3-20) character"),
  body("password")
    .isNumeric()
    .withMessage("please enter a valid Quantity")
    .isLength({ min: 1, max: 2 })
    .withMessage("Quantity should be between (1-2) character"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);

      const userData = {
        user_id : req.body.user_id ,

        name_of_medicine: req.body.name_of_medicine,
        name_of_user: req.body.name_of_user,
        password: req.body.password,
        Accept: req.body.Accept,
        state: req.body.state,
        image_url: req.body.image_url,


      };


      await Promise.all([
        query("insert into medicine_request set ?", userData),
      ]);

      res.status(200).json({ message: "Data inserted successfully" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
);

router.post("/request", 
    body("medicine_id")
        .isNumeric()
        .withMessage("please enter a valid medicine ID"),
    body("user_id")
        .isNumeric()
        .withMessage("please enter a valid user ID"),
        body("password")
        .isNumeric()
        .withMessage("please enter a valid Quantity")
        .isLength({ min: 1, max: 2 })
        .withMessage("Quantity should be between (1-2) character"),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const medicineID = req.body.medicine_id;
            const queryy = util.promisify(conn.query).bind(conn);
            const medicine = await queryy("select * from medicines where id = ?", medicineID);
            if (!medicine[0]) {
                res.status(404).json({ msg: "medicine not found" })
                return;
            }
            const request = {
                user_id: req.body.user_id,
                medicine_id: req.body.medicine_id,
                password: req.body.password
                // Accept: req.body.Accept,
            }
            const query = util.promisify(conn.query).bind(conn);
            await query("insert into request set ?", request);
            res.status(200).json({
                msg: "medicine requested successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    })



module.exports = router;
