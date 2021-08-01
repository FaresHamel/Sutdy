const express = require("express");
const router = express.Router();
const modules = require("../controllers/modules");
const multer = require("multer");
const Mod = require("../models/modules");
const GridFsStorage = require("multer-gridfs-storage");
const cours = require("../models/cours");

// create storage engine fro courses
const storage = new GridFsStorage({
  url: "mongodb://localhost:27017/elearning",
  file: (req, file) => {
    return {
      bucketName: "courses",
      //Setting collection name, default name is fs
      filename: file.originalname,
      //Setting file name to original name of file
    };
  },
});
// create storage engine fro modules
const storagemodule = new GridFsStorage({
  url: "mongodb://localhost:27017/elearning",
  file: (req, file) => {
    return {
      bucketName: "modules",
      //Setting collection name, default name is fs
      filename: file.originalname,
      //Setting file name to original name of file
    };
  },
});
const upload = multer(storage);
const uploadModule = multer(storagemodule);

router.post("/addModule", uploadModule.single("file"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  try {
    const mod = new Mod({
      name: req.body.name,
      filename: req.file.originalname,
      cridit: req.body.cridit,
      coeficient: req.body.coeficient,
      cours: req.body.cours,
      Td: req.body.Td,
      Tp: req.body.Tp,
    });
    const reslt = await Mod.findOne({ name: mod.name });

    if (reslt) {
      return res.json({ success: false, result: "Module existe" });
    }

    await mod.save().then((result) => {
      res.status(200).json({
        success: true,
        result,
      });
    });
  } catch (erro) {
    res.json({ result: error });
  }
});

router.get("/getModules", modules.getAlleModules);
router.get("/cours/get/all", modules.getAlleCourses);


router.post("/addCours", upload.single("file"), async (req, res) => {
  try {
    const cou = new cours({
      description: req.body.description,
      filename: req.file.originalname,
      module: req.body.module,
    });
    await cou.save().then((result) => {
      res.status(200).json({
        success: true,
        result,
      });
    });
  } catch (erro) {
    res.json({ message: error });
  }
});

module.exports = router;
