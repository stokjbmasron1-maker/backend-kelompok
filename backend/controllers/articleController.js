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

const createArticle = async (req, res) => {
  const { title, author, published_date, preview, content } = req.body;
  if (!title || !author || !published_date) {
    return res.status(400).json({ message: 'Title, author, dan tanggal wajib diisi' });
  }
  const image_path = req.file ? `/uploads/${req.file.filename}` : null;
  const article = await Article.create({ title, author, published_date, preview, content, image_path });
  res.status(201).json(article);
};

const updateArticle = async (req, res) => {
  const article = await Article.findByPk(req.params.id);
  if (!article) return res.status(404).json({ message: 'Artikel tidak ditemukan' });
  const { title, author, published_date, preview, content } = req.body;
  const image_path = req.file ? `/uploads/${req.file.filename}` : article.image_path;
  await article.update({ title, author, published_date, preview, content, image_path });
  res.json(article);
};

const deleteArticle = async (req, res) => {
  const article = await Article.findByPk(req.params.id);
  if (!article) return res.status(404).json({ message: 'Artikel tidak ditemukan' });
  await article.destroy();
  res.json({ message: 'Artikel berhasil dihapus' });
};

module.exports = { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle };
