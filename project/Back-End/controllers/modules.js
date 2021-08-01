const Modules = require("../models/modules");
const mongose = require("mongoose");
const courses = require("../models/cours");

module.exports.deleteModule = async (req, res) => {};

module.exports.putModule = async (req, res) => {};
module.exports.getAlleModules = async (req, res) => {

  try {
    const reslt = await Modules.find();

    if (reslt) {
      return res.json({ reslt });
    }

  } catch (erro) {
    res.json({ message: error });
  }

};
module.exports.getAlleCourses = async (req, res) => {
  try {
    const reslt = await courses.find();

    if (reslt) {
      return res.json({ reslt });
    }
  } catch (erro) {
    res.json({ message: error });
  }
};