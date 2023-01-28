"use strict";
require("dotenv").config();
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const jwt = require("jsonwebtoken");

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

// Middle ware for AUTHENTICATION
const verifyJWT = (req, res, next) => {
  const token = req.headers["auth-token"];
  console.log("verifyJWT token : ", token);
  if (!token) {
    res
      .status(403)
      .json({ message: "Your are not authenticated, Token needed" });
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403).send("Authentication failed, PLEASE RE-LOGIN..");
      } else {
        req.userID = decoded.id;
        next();
      }
    });
  }
};

//loginn
router.post("/login", adminController.admin_login);

module.exports = router;
