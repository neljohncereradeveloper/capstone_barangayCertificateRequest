"use strict";
require("dotenv").config();
const { db, pool } = require("../database/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Note: dont use res.send two times in a single request

//Retrieve employee
const specific_employee = (req, res) => {
  const id = req.params.employeeID;
  db.query(
    "SELECT fullname FROM tblemployee WHERE employeeID = ? LIMIT 1",
    id,
    (err, result) => {
      if (err) {
        console.log("Inter Error", err);
      } else {
        res.send(result);
      }
    }
  );
};
//Retrieve users
const employee_view = (req, res) => {
  db.query(
    "SELECT employeeID,idnumber,fullname,contact,address FROM tblemployee",
    (err, result) => {
      if (err) {
        console.log("Inter Error", err);
      } else {
        res.send(result);
      }
    }
  );
};

//insert user account(household data , personal informations and passwords)
const employee_create = (req, res) => {
  const {
    idnumber,
    fullname,
    contact,
    address,
    username,
    p_assword,
  } = req.body;
  console.log("e password", p_assword);

  bcrypt.hash(p_assword, saltRounds, (err, hash) => {
    if (err) {
      console.log("hashing error :", err);
    } else {
      //MYSQL STORED PROCEDURE sp_insert_userAccount_insertLog
      db.query(
        "CALL sp_insert_employeeAccount(?,?,?,?,?,?)",
        [idnumber, fullname, contact, address, username, hash],
        (err, result) => {
          if (err) {
            res
              .status(500)
              .json({ message: "Employee_create_account internal error" });
            console.log("Employee_create_account internal error :", err);
          } else {
            res.status(201).json({
              message: "Employee Account Created Successfully",
              result: result,
              auth: true,
            });
            console.log("Employee Account Created Successfully");
          }
        }
      );
    }
  });
};

module.exports = {
  employee_view,
  specific_employee,
  employee_create,
};
