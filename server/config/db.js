//import the Sequelize class
const Sequelize = require('sequelize');

//create an instance of this sequelize class
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mydatabase.sqlite',
});

module.exports = sequelize;
