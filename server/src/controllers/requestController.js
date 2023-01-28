"use strict";
require("dotenv").config();
const { db } = require("../database/connection");
const insert = require("../queries/insert");
const select = require("../queries/select");
const update = require("../queries/update");
// Retrive all pending request
const pendingall = (req, res) => {
  const request_retrieve_pending_all =
    "SELECT COUNT(*) AS Pendings FROM tblrequest WHERE statusID = '1'";
  db.query(request_retrieve_pending_all, (err, result) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      res.json({
        message: "retrieve all request pending count successfull",
        result: result,
      });
    }
  });
};
//Retrieve request by status name
const request_retrieve_byStatus = (req, res) => {
  const status = req.params.status;
  db.query(
    "SELECT * FROM view_request_approve_disapprove where status = ? ",
    status,
    (err, result) => {
      if (err) {
        console.log("Inter Error", err);
        res.json({ message: "not successfull" });
      } else {
        res.json({
          message: "retrieve request by status successfull",
          result: result,
        });
      }
    }
  );
};
//Retrieve all Request
const request_retrieve_all = (req, res) => {
  db.query(select.request_retrieve_all, (err, result) => {
    if (err) {
      console.log("Inter Error", err);
      res.json({ message: "not successfull" });
    } else {
      res.json({ message: "retrieve all request successfull", result: result });
    }
  });
};
// Retrive user pending request
const request_retrieve_pending = (req, res) => {
  const id = req.params.userID;
  console.log("userID", id);
  db.query(select.request_retrieve_pending, id, (err, result_pending) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      db.query(
        "SELECT r_expiration FROM tblrequest WHERE userID = ?",
        id,
        (err, result) => {
          if (err) {
            console.log("Inter Error", err);
          } else {
            const formateDate = (date) => {
              var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

              if (month.length < 2) month = "0" + month;
              if (day.length < 2) day = "0" + day;

              return [year, month, day].join("-");
            };
            const d_now = Date.now();
            const datee = new Date(d_now);
            const date_now = formateDate(datee);
            result.map((res) => {
              let res_date = formateDate(res.r_expiration);
              if (date_now === res_date.toString()) {
                db.query(
                  "DELETE FROM tblrequest WHERE statusID = 1  AND userID = ? AND r_expiration = ?",
                  [id, date_now],
                  (err, result) => {
                    if (err) {
                      console.log("err deleting", err);
                    } else {
                      console.log("Successfully Deleted");
                    }
                  }
                );
              }
            });
          }
        }
      );

      res.json({
        message: "retrieve pending request of an specific user successfull",
        result: result_pending,
      });
    }
  });
};
// Retrive user pending request dates
const request_retrieve_pending_dates = (req, res) => {
  const id = req.params.userID;
  db.query(select.request_retrieve_pending_dates, id, (err, result) => {
    if (err) {
      console.log("Inter Error", err);
    } else {
      console.log("pending request DATES result", result[0].r_date);
      console.log("DATES", Date());
      res.json({
        message:
          "retrieve pending request DATES of an specific user successfull",
        result: result,
      });
    }
  });
};

//Insert Request
const request_insert = (req, res) => {
  const { userID, certificateName, payment, purpose, status } = req.body;
  console.log("payment", payment);
  db.query(
    insert.request_insert,
    [userID, certificateName, payment, purpose, status],
    (err, result) => {
      if (err) {
        res.status(500).send("Insert  request internal Error");
        console.log("Insert  request internal Error", err);
      } else {
        res
          .status(201)
          .json({
            message: "Insert request successfull",
            result: result,
            auth: true,
          })
          .end();
      }
    }
  );
};
//Update Request status
const request_update_status = (req, res) => {
  const requestID = req.params.requestID;
  const { employeeID, status, barangayID_no, disapproveReason } = req.body;

  db.query(
    "CALL sp_approve_disapprove_request(?,?,?,?,?)",
    [status, requestID, barangayID_no, employeeID, disapproveReason],
    (err, result) => {
      if (err) {
        res.status(500).send("Update request status internal error");
        console.log("request err", err);
      } else {
        res.status(201).json({
          message: "Update request status successfull",
          result: result,
        });
      }
    }
  );
};

const request_pending = (req, res) => {
  const id = req.params.userID;

  connection.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    connection.query(
      select.request_retrieve_pending,
      id,
      function (error, results, fields) {
        if (error) {
          return connection.rollback(function () {
            throw error;
          });
        }

        connection.query(
          "INSERT INTO log SET data=?",
          log,
          function (error, results, fields) {
            if (error) {
              return connection.rollback(function () {
                throw error;
              });
            }
            connection.commit(function (err) {
              if (err) {
                return connection.rollback(function () {
                  throw err;
                });
              }
              console.log("success!");
            });
          }
        );
      }
    );
  });
};

module.exports = {
  pendingall,
  request_retrieve_byStatus,
  request_retrieve_all,
  request_retrieve_pending,
  request_retrieve_pending_dates,
  request_insert,
  request_update_status,
};
