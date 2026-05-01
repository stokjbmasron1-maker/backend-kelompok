const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teacher = sequelize.define('Teacher', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(150), allowNull: false },
  credentials: { type: DataTypes.STRING(100) },
  role: { type: DataTypes.STRING(150) },
  bio: { type: DataTypes.TEXT },
  image_path: { type: DataTypes.STRING(255) },
}, {
  tableName: 'teachers',
  timestamps: false,
});

module.exports = Teacher;
