const pgp = require("pg-promise")();
require("dotenv").config();

const url = process.env.DATABASE_URL;

// const cn = {
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//   };

const db = pgp(url);

module.exports = db;
