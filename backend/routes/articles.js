const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } = require('../controllers/articleController');

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', auth, upload.single('image'), createArticle);
router.put('/:id', auth, upload.single('image'), updateArticle);
router.delete('/:id', auth, deleteArticle);

module.exports = router;
