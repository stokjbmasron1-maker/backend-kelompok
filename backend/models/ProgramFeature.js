const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProgramFeature = sequelize.define('ProgramFeature', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  program_id: { type: DataTypes.INTEGER, allowNull: false },
  feature_text: { type: DataTypes.STRING(255), allowNull: false },
  order_num: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
  tableName: 'program_features',
  timestamps: false,
});

module.exports = ProgramFeature;
