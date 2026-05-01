const { Article } = require('../models');

const getAllArticles = async (req, res) => {
  const articles = await Article.findAll({ order: [['published_date', 'DESC']] });
  res.json(articles);
};

const getArticleById = async (req, res) => {
  const article = await Article.findByPk(req.params.id);
  if (!article) return res.status(404).json({ message: 'Artikel tidak ditemukan' });
  res.json(article);
};

module.exports = { getAllArticles, getArticleById };
