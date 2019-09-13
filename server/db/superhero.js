const Sequelize = require('sequelize');
const db = require('./database');

const Superhero = db.define('superhero', {
  name: {
    type: Sequelize.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  favoriteFood: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  powerLevel: {
    type: Sequelize.FLOAT,
    defaultValue: 50,
    // validate: {
    //   max: 100,
    //   min: 0,
    // },
  },
  origin: {
    type: Sequelize.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
});
module.exports = Superhero;
