const mysql = require("mysql");
require("dotenv").config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const db = mysql.createConnection(dbConfig);
const pool = mysql.createPool(dbConfig);

module.exports = { db, pool };
