"use strict";
const express = require("express");
const router = express.Router();
const settingsController = require("../controllers/settingsController");
const multer = require("multer");

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

const upload = multer();

//Update settings
router.put("/update", settingsController.update_settings);
//Update settings
router.post("/image", settingsController.insert_image);
//Update settings
router.put("/barangayinfo", settingsController.update_barangayinfo);
//Retrieve Settings
router.get("/retrieve", settingsController.retrieve_settings);

module.exports = router;
