// configuracion de la DB
require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DB_NAME, null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

