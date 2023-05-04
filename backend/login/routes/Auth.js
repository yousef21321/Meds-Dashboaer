const router = require("express").Router();
const conn = require("../db/dbConnection");
const { body, validationResult } = require("express-validator");
const util = require("util");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// Middleware for regular user
const userMiddleware = (req, res, next) => {
  if (req.user.role !== "Patient") {
    return res.status(401).json({
      errors: [
        {
          msg: "Unauthorized access!",
        },
      ],
    });
  }
  next();
};

// Middleware for admin
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(401).json({
      errors: [
        {
          msg: "Unauthorized access!",
        },
      ],
    });
  }
  next();
};

// LOGIN
router.post(
  "/login/:role(user|admin)",
  body("email").isEmail().withMessage("please enter a valid email!"),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("password should be between (8-12) character"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);
      const user = await query("select * from users where email = ?", [
        req.body.email,
      ]);
      if (user.length == 0) {
        return res.status(404).json({
          errors: [
            {
              msg: "email or password not found!",
            },
          ],
        });
      }

      const checkPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (checkPassword) {
        // Remove sensitive information from response
        const safeUser = {
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
          role: user[0].role,
          token:user[0].token
        };
        return res.status(200).json(safeUser);
      } else {
        return res.status(404).json({
          errors: [
            {
              msg: "email or password not found!",
            },
          ],
        });
      }
    } catch (err) {
      // Log error message to server logs
      console.error(`Error while logging in: ${err}`);
      return res.status(500).json({ errors: [{ msg: "Internal server error." }] });
    }
  }
);

// REGISTER
router.post(
  "/register/:role(user|admin)",
  body("email").isEmail().withMessage("please enter a valid email!"),
  body("name")
    .isString()
    .withMessage("please enter a valid name")
    .isLength({ min: 10, max: 20 })
    .withMessage("name should be between (10-20) character"),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("password should be between (8-12) character"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);
      const checkEmailExists = await query(
        "select * from users where email = ?",
        [req.body.email]
      );
      if (checkEmailExists.length > 0) {
        return res.status(409).json({
          errors: [
            {
              msg: "email already exists!",
            },
          ],
        });
      }
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        token: crypto.randomBytes(16).toString("hex"),
        // role:req.body.role,
        phone: req.body.phone
      };

     
      await query("insert into users set ? ", userData);
      delete userData.password;
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json({ err: err });
    }
  }
);
router.put(
  "/users/:id",
  body("name")
    .isString()
    .withMessage("please enter a valid name")
    .isLength({ min: 10, max: 20 })
    .withMessage("name should be between (10-20) character"),
  body("phone").isString().withMessage("please enter a valid phone number"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);
      const checkUserIdExists = await query(
        "select * from users where id = ?",
        [req.params.id]
      );
      if (checkUserIdExists.length === 0) {
        return res.status(404).json({
          errors: [
            {
              msg: "user not found!",
            },
          ],
        });
      }

      const userData = {
        name: req.body.name,
        phone: req.body.phone,
      };

      await query("update users set ? where id = ?", [userData, req.params.id]);

      res.status(200).json({ msg: "user updated successfully" });
    } catch (err) {
      res.status(500).json({ err: err });
    }
  }
);



router.post(
  "/meds/create",
  body("name").isString().withMessage("please enter a valid name"),
  body("description").isString().withMessage("please enter a valid description"),
  body("price")
    .isNumeric()
    .withMessage("please enter a valid price")
    .isFloat({ min: 0 })
    .withMessage("price should be greater than or equal to 0"),
 
  body("image_url").isString().withMessage("please enter a valid image URL"),
  body("category_id")
    .isNumeric()
    .withMessage("please enter a valid category ID")
    .isInt({ min: 1 })
    .withMessage("category ID should be greater than or equal to 1"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);
      const checkMedicineExists = await query(
        "SELECT * FROM medicines WHERE name = ?",
        [req.body.name]
      );
      if (checkMedicineExists.length > 0) {
        return res.status(409).json({
          errors: [
            {
              msg: "medicine already exists!",
            },
          ],
        });
      }

      const medicineData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        expirationDate: req.body.expirationDate,
        image_url: req.body.image_url,
        category_id: req.body.category_id,
      };

      await query("INSERT INTO medicines SET ?", medicineData);
      res.status(200).json(medicineData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: err });
    }
  }
);

module.exports = router;