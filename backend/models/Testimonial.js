const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Testimonial = sequelize.define('Testimonial', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  role_type: { type: DataTypes.ENUM('student', 'parent', 'alumni'), allowNull: false },
  quote: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: 'testimonials',
  timestamps: false,
});

module.exports = Testimonial;
