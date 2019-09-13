const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/imdbTop250', {
  logging: false,
});

module.exports = db;
