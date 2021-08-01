const User = require("../models/users");
const Jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Cryptage
const getHashedPassword = (password) => {
  const sha256 = crypto.createHash("sha256");
  const hash = sha256.update(password).digest("base64");
  return hash;
};

// const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);
const accessTokenSecret = "youraccesstokensecret";
// create Token
const createToken = (id) => {
  const token = Jwt.sign({ id }, accessTokenSecret);
  return token;
};

module.exports.singinUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      username: req.body.username,
      passwrodEncrypt: getHashedPassword(req.body.password),
    });
    if (user) {
      const token = createToken(user._id);

      return res.json({ auth: true, user, token, red: "/Home" });
    } else {
      //mouhamedhamel@gmail.com
      return res.json({ auth: false, red: "/singIn" });
    }
  } catch (error) {
    //Mouhamed
    //test21elhamel
    return res.json({ auth: "Bismi Allahh" });
  }
};
