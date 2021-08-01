const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check");
const authuser = require("../controllers/authuser");
const userControl = require("../controllers/user");
const singUpUser = require("../controllers/singup");


router.post(
  "/singIn",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "please Enter a valid Email Address").isEmail(),
    check("password", "please your password is short try again").isLength({
      min: 8,
    }),
  ],
  authuser.singinUser
);

router.post(
  "/singUp",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("firstname", "Please Enter a Valid firstname").not().isEmpty(),
    check("lastname", "Please Enter a Valid lastname").not().isEmpty(),
    check("role", "Please Enter a Valid City").not().isEmpty(),
    check("phone", "Please Enter a Valid numberPhone").not().isEmpty(),
    check("email", "please Enter a valid Email Address").isEmail(),
    check("password", "please your password is short try again").isLength({
      min: 8,
    }),
  ],
  singUpUser.singUpUser
);


router.delete(
  "/delete",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "please Enter a valid Email Address").isEmail(),
    check("password", "please your password is short try again").isLength({
      min: 8,
    }),
  ],
  userControl.deletedUser
);

router.put("/update", userControl.getInformationUser);

router.get("/userInformation", userControl.getInformationUser);

router.get("/user:iduser");

module.exports = router;
