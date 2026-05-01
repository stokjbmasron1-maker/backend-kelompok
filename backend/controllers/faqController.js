const { FAQ } = require('../models');

const getAllFAQs = async (req, res) => {
  const faqs = await FAQ.findAll({ order: [['order_num', 'ASC']] });
  res.json(faqs);
};

const createFAQ = async (req, res) => {
  const { question, answer, order_num } = req.body;
  if (!question || !answer) return res.status(400).json({ message: 'Pertanyaan dan jawaban wajib diisi' });
  const faq = await FAQ.create({ question, answer, order_num });
  res.status(201).json(faq);
};

const updateFAQ = async (req, res) => {
  const faq = await FAQ.findByPk(req.params.id);
  if (!faq) return res.status(404).json({ message: 'FAQ tidak ditemukan' });
  const { question, answer, order_num } = req.body;
  await faq.update({ question, answer, order_num });
  res.json(faq);
};

const deleteFAQ = async (req, res) => {
  const faq = await FAQ.findByPk(req.params.id);
  if (!faq) return res.status(404).json({ message: 'FAQ tidak ditemukan' });
  await faq.destroy();
  res.json({ message: 'FAQ berhasil dihapus' });
};

module.exports = { getAllFAQs, createFAQ, updateFAQ, deleteFAQ };
