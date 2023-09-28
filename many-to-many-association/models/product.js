const Sequelize = require('sequelize');
const sequelize = require('../util/database');

// creating models
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  }, 
  title: Sequelize.STRING,
  price: {
    type: Sequelize.FLOAT, 
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product; 
