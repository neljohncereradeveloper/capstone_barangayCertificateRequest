"use strict";
require("dotenv").config();
const { db, pool } = require("../database/connection");
const jwt = require("jsonwebtoken");

//Note: dont use res.send two times in a single request

//Update from client
const client_update = (req, res) => {
  const { fullName, age, gender, birthDate, address, civilStatus } = req.body;
  const id = req.params.userID;
  db.query(
    "CALL sp_update_client(?,?,?,?,?,?,?)",
    [fullName, age, gender, birthDate, address, civilStatus, id],
    (err, result) => {
      if (err) {
        console.log("Internal Error", err);
        res.status(500).json({ messgae: "Internal error" });
      } else {
        const userID = id;
        const token = jwt.sign({ userID }, process.env.SECRET_KEY);
        res.header("auth-token", token).status(201).json({
          message: "Cilent updated Successly",
          result: result,
          auth: true,
        });
        console.log("Client updated Successly");
      }
    }
  );
};

//Retrieve user client informations
const client_history_records = (req, res) => {
  const { userID } = req.params;
  db.query(
    "SELECT * FROM view_all_client_request WHERE userID = ?",
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

module.exports = {
  client_update,
  client_history_records,
};
