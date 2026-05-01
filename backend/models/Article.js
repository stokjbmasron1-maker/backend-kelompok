const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(255), allowNull: false },
  author: { type: DataTypes.STRING(100), allowNull: false },
  published_date: { type: DataTypes.DATEONLY, allowNull: false },
  image_path: { type: DataTypes.STRING(255) },
  preview: { type: DataTypes.TEXT },
  content: { type: DataTypes.TEXT('long') },
}, {
  tableName: 'articles',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Article;
