const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/adminRoutes");
const user = require("./routes/userRoutes");
const client = require("./routes/clientRoutes");
const employee = require("./routes/employeeRoutes");
const request = require("./routes/requestRoutes");
const logs = require("./routes/logsRoutes");
const settings = require("./routes/settingsRoutes");
const reports = require("./routes/reportRoutes");
const fileUpLoad = require("express-fileupload");

/* Middel Wares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

app.use(fileUpLoad());

//Routes
//Amdmin
app.use("/api/admin", admin);
//client
app.use("/api/client", client);
//User
app.use("/api/user", user);
//Employee
app.use("/api/employee", employee);
// User Request
app.use("/api/request", request);
// Logs
app.use("/api/logs", logs);
// Settings
app.use("/api/settings", settings);
// Reports
app.use("/api/reports", reports);

/*PORTS */
const port = 3001;
app.listen(port, () => {
  console.log("Listening on port: ", port);
});
