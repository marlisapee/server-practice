//import your database instance and Datatypes
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

//use the define method to help us define a Company model
const Company = sequelize.define('company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

//export our Company model
module.exports = Company;
