"use strict";
require("dotenv").config();
const { db } = require("../database/connection");

// Retrive all pending request
const logs_request = (req, res) => {
  const retrieve_all_logs = "SELECT * FROM view_logs";
  db.query(retrieve_all_logs, (err, result) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      console.log("logs result", result);
      res.json({
        message: "retrieve all logs successfull",
        result: result,
      });
    }
  });
};

module.exports = { logs_request };
