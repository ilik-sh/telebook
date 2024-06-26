const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    timezone: "+03:00",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
