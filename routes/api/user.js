const router = require("express").Router();
const userController = require("../../../../../../Downloads/DiceRollerz-master/controllers/userController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../../../../Downloads/DiceRollerz-master/config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const db = require("../../../../../../Downloads/DiceRollerz-master/models");

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  console.log(req.body);
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    console.log("Not Valid - returned 400")
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const password = req.body.password;
// Find user by username
  db.User.findOne({ username }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ usernamenotfound: "Username not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route POST api/users/register
// @desc Register user
// @access Public

function validateSignUp(req,res){ 
  console.log("calling sign in validation")
  // return res.status(200).json("random text")
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
db.User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new db.User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update);

router.route("/signup")
  .post(validateSignUp)
  .get(validateSignUp);

  module.exports = router;









