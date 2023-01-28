"use strict";
require("dotenv").config();
const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
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

//Retrieve Employee
router.get("/view", employeeController.employee_view);
//Inserrt Employee
router.post("/create", employeeController.employee_create);
//Retrieve Employee
router.get("/:employeeID", employeeController.specific_employee);

module.exports = router;
