const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "database-1.cdjysm5ks7zh.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: process.env.PASSWORD,
  database: "blog",
});

module.exports = db;
