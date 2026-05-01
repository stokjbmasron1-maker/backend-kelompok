const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Program = sequelize.define('Program', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  level: { type: DataTypes.STRING(50) },
  description: { type: DataTypes.TEXT },
  image_path: { type: DataTypes.STRING(255) },
  price: { type: DataTypes.INTEGER },
  schedule_days: { type: DataTypes.STRING(150) },
  schedule_time: { type: DataTypes.STRING(50) },
}, {
  tableName: 'programs',
  timestamps: false,
});

module.exports = Program;
