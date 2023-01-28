"use strict";
const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});
//NOTE: PUT ALL ROUTES WITH PARAMS AT THE BOTTOM

//Retrieve all request
router.get("/total", requestController.request_retrieve_all);
//Retrive all Pending request
router.get("/allpending", requestController.pendingall);
//Insert request
router.post("/insert", requestController.request_insert);
//Retrieve request by status name
router.get("/:status", requestController.request_retrieve_byStatus);
//Retrive user Pending request
router.get("/retrieve/:userID", requestController.request_retrieve_pending);
//Retrive user Pending request Dates
router.get(
  "/retrieve/pendingdates/:userID",
  requestController.request_retrieve_pending_dates
);

//Update request status
router.put(
  "/status/update/:requestID",
  requestController.request_update_status
);
module.exports = router;
