const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Project;
