const Sequelize = require('sequelize');
const db = require('./database');

const Movie = db.define('movie', {
  poster: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  year: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.STRING,
  },
});

module.exports = Movie;
