const { Subscription } = require('../models');

const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email wajib diisi' });
  const existing = await Subscription.findOne({ where: { email } });
  if (existing) return res.status(409).json({ message: 'Email sudah terdaftar' });
  await Subscription.create({ email });
  res.status(201).json({ message: 'Berhasil berlangganan newsletter' });
};

const getAllSubscriptions = async (req, res) => {
  const subscriptions = await Subscription.findAll({ order: [['created_at', 'DESC']] });
  res.json(subscriptions);
};

module.exports = { subscribe, getAllSubscriptions };
