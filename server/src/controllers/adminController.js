"use strict";
require("dotenv").config();
const { db, pool } = require("../database/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

//Admin Login
const admin_login = (req, res) => {
  const user = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT employeeID,username,p_assword FROM tblemployee WHERE username = ? AND isActive = 1",
    user,
    function (err, result) {
      console.log("admin Login result : ", result);
      if (err) {
        console.log("Login Internal Error", err);
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].p_assword, (err, response) => {
          if (response) {
            const id = result[0].userID;
            const token = jwt.sign({ id }, process.env.SECRET_KEY, {
              // 5s = 5seconds, 1d = 1day, 5 = 5milliseconds, 5m = 5minutes
              expiresIn: "5h",
            });
            res.header("auth-token", token).status(200).json({
              auth: true,
              token: token,
              result: result,
              message: "Loggin Successfull",
            });
          } else {
            console.log("Wrong Password Combination error : ", err);
            res.json({
              message: "Wrong Password Combination",
              auth: false,
            });
          }
        });
      } else {
        res.status(404).json({ message: "User Doesn't Exist", auth: false });
      }
    }
  );
};

module.exports = {
  admin_login,
};
