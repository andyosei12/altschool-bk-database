'use strict';
const sequelize = require('../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('products', {
  name: DataTypes.STRING,
  price: DataTypes.DOUBLE,
  size: DataTypes.STRING,
  image_url: DataTypes.STRING,
  description: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'inactive'],
  },
  category_id: DataTypes.INTEGER,
});

module.exports = Product;
