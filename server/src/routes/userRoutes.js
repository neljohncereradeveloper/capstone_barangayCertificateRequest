"use strict";
require("dotenv").config();
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
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
router.post("/login", userController.user_login);
//Retrieve
router.get("/view", userController.user_view);
//Create using the middleware verifyJWT for authentication
router.get("/client/info/:userID", userController.user_client_informations);
//Create using the middleware verifyJWT for authentication
router.get("/household/:userID", userController.user_client_household);
router.post("/create", userController.user_create);
//Retrieve with USER ID using the middleware verifyJWT for authentication
router.get("/:userID", userController.user_view_userID);
//Update using the middleware verifyJWT for authentication
router.put("/update/:userID", verifyJWT, userController.user_update);
//Delete using the middleware verifyJWT for authentication
router.put("/delete/:userID", verifyJWT, userController.user_delete);

module.exports = router;
