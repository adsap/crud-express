const dotenv = require('dotenv');
const mysql = require("mysql2");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error(".env not found");
}
const conn = mysql.createConnection(
  {
    host: process.env.DBHOST,
    port: process.env.DBPORT || 3000,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    connectionLimit: process.env.DBLIMIT,
  }
);

const connection = conn.promise();

connection.connect();

module.exports = connection;
