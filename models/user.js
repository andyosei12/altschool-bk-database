'use strict';
const sequelize = require('../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  contact: DataTypes.STRING,
  role_id: DataTypes.INTEGER,
});

module.exports = User;
