require("dotenv").config();
const { db } = require("../database/connection");

// Retrive all pending request
const approve_request = (req, res) => {
  const { fromDate, toDate, status } = req.params;
  console.log("fromDate", fromDate);
  console.log("toDate", toDate);
  db.query(
    "SELECT * FROM view_reports_approve WHERE STATUS = ? AND r_date BETWEEN ? AND ?",
    [status, fromDate, toDate],
    (err, result) => {
      if (err) {
        console.log("aprrove reports Error", err);
      } else {
        res
          .json({
            message: "retrieve approve reports successfull",
            result: result,
          })
          .status(200);
      }
    }
  );
};
module.exports = { approve_request };
