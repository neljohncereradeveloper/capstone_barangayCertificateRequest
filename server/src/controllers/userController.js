"use strict";
require("dotenv").config();
const { db, pool } = require("../database/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const select = require("../queries/select");

//Note: dont use res.send two times in a single request

//User Login
const user_login = (req, res) => {
  const user = req.body.username;
  const password = req.body.password;
  console.log("user", user);
  console.log("password", password);
  db.query(select.select_user_username, user, function (err, result) {
    console.log("Login result : ", result);
    if (err) {
      console.log("Login Internal Error", err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].p_assword, (err, response) => {
        if (response) {
          const id = result[0].userID;
          const token = jwt.sign({ id }, process.env.SECRET_KEY, {
            // 5s = 5seconds, 1d = 1day, 5 = 5milliseconds, 5m = 5minutes
            expiresIn: "1h",
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
  });
};
//Retrieve user client informations
const user_client_informations = (req, res) => {
  const { userID } = req.params;
  db.query(
    "SELECT * FROM view_user_info_household WHERE userID = ? LIMIT 1",
    userID,
    (err, result) => {
      if (err) {
        console.log("Inter Error", err);
      } else {
        res.send(result);
      }
    }
  );
};
//Retrieve user client HOUSEHOLD
const user_client_household = (req, res) => {
  const { userID } = req.params;
  db.query("Call sp_retrieve_user_household ( ? ) ", userID, (err, result) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      res.send(result);
    }
  });
};

//Retrieve users
const user_view = (req, res) => {
  db.query("SELECT * FROM view_allusers", (err, result) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      res.send(result);
    }
  });
};
//Retrieve specific user
const user_view_userID = (req, res) => {
  const id = req.params.userID;
  console.log("user id :", id);
  db.query("CALL sp_retrieve_user_informations(?)", id, (err, result) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      res.send(result);
    }
  });
};
//insert user account(household data , personal informations and passwords)
const user_create = (req, res) => {
  const {
    barangayID_no,
    houseHoldID_no,
    houseHold_role,
    fullName,
    age,
    gender,
    birthDate,
    birthPlace,
    civilStatus,
    address,
    userName,
    password,
  } = req.body;
  console.log("bday :", birthDate);

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log("hashing error :", err);
    } else {
      //MYSQL STORED PROCEDURE sp_insert_userAccount_insertLog
      db.query(
        "CALL sp_insert_userAccount_insertLog(?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          barangayID_no,
          houseHoldID_no,
          houseHold_role,
          fullName,
          age,
          gender,
          birthDate,
          birthPlace,
          civilStatus,
          address,
          userName,
          hash,
        ],
        (err, result) => {
          if (err) {
            res
              .status(500)
              .json({ message: "user_create_account internal error" });
            console.log("user_create_account internal error :", err);
          } else {
            res.status(201).json({
              message: "Account Created Successfully",
              result: result,
              auth: true,
            });
            console.log("Account Created Successfully");
          }
        }
      );
    }
  });
};
//Update user plus insert updatelogs
const user_update = (req, res) => {
  const {
    barangayID_no,
    fullName,
    age,
    gender,
    birthDate,
    birthPlace,
    civilStatus,
    address,
    username,
    household_ID,
    householdrole,
  } = req.body;
  const id = req.params.userID;
  db.query(
    "CALL sp_update_userInformations_updateLog(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      barangayID_no,
      fullName,
      age,
      gender,
      birthDate,
      birthPlace,
      civilStatus,
      address,
      id,
      username,
      household_ID,
      householdrole,
    ],
    (err, result) => {
      if (err) {
        console.log("Internal Error", err);
        res.status(500).json({ messgae: "Internal error" });
      } else {
        const userID = id;
        const token = jwt.sign({ userID }, process.env.SECRET_KEY);
        res.header("auth-token", token).status(201).json({
          message: "User updated Successly",
          result: result,
          auth: true,
        });
        console.log("User updated Successly");
      }
    }
  );
};
//Delete user
const user_delete = (req, res) => {
  const { barangayID_no } = req.body;
  const id = req.params.userID;
  console.log("barangay id no", barangayID_no);
  console.log("user id no", id);
  db.query(
    "CALL sp_delete_userInformations_deleteLog(?,?)",
    [id, barangayID_no],
    (err, result) => {
      if (err) {
        console.log("Internal Error", err);
        res.status(500).send("Internal error");
      } else {
        const userID = id;
        const token = jwt.sign({ userID }, process.env.SECRET_KEY);
        res.header("auth-token", token).status(200).json({
          message: "User Deleted successfully",
          auth: true,
        });
        console.log("Delete user sueccessfull");
      }
    }
  );
};

module.exports = {
  user_login,
  user_view,
  user_client_informations,
  user_client_household,
  user_create,
  user_view_userID,
  user_update,
  user_delete,
};
