const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FAQ = sequelize.define('FAQ', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.TEXT, allowNull: false },
  answer: { type: DataTypes.TEXT, allowNull: false },
  order_num: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
  tableName: 'faqs',
  timestamps: false,
});

module.exports = FAQ;
