"use strict";
const express = require("express");
const router = express.Router();
const logsController = require("../controllers/logsController");

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

//Retrieve all request
router.get("/logsrequests", logsController.logs_request);

module.exports = router;
