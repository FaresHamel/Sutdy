const User = require("../models/users");
const mongose = require("mongoose");
const { error } = require("console");
const crypto = require("crypto");
const Jwt = require("jsonwebtoken");

// Cryptage
const getHashedPassword = (password) => {
  const sha256 = crypto.createHash("sha256");
  const hash = sha256.update(password).digest("base64");
  return hash;
};
//    const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);
const accessTokenSecret = "youraccesstokensecret";
//create Token
const createToken = (id) => {
  const token = Jwt.sign({ id }, accessTokenSecret);
  return token;
};

module.exports.singUpUser = async (req, res) => {
  
  const user = new User({
    _id: new mongose.Types.ObjectId(),
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    numberPhon: req.body.phone,
    role: req.body.role,
    dateInscription: new Date(),
    passwrodEncrypt: getHashedPassword(req.body.password),
  });

  try {
    const reslt = await User.findOne({ email: user.email });

    if (reslt) {
      return res.json({ insertion: false, message: "email existe" });
    }
   
    await user
      .save()
      .then((result) => {
        const token = createToken(user._id);
        return res.json({ insertion: true, link: "/", user, token });
      })
      .catch((error) => {
        return res.send({ insertion: false, message: "please try egain" });
      });
  } catch (erro) {
    res.json({ message: error });
  }
};
