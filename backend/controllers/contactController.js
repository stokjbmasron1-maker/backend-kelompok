const { Contact } = require('../models');

const submitContact = async (req, res) => {
  const { full_name, email, subject, message } = req.body;
  if (!full_name || !email || !message) {
    return res.status(400).json({ message: 'Nama, email, dan pesan wajib diisi' });
  }
  const contact = await Contact.create({ full_name, email, subject, message });
  res.status(201).json({ message: 'Pesan berhasil dikirim', data: contact });
};

const getAllContacts = async (req, res) => {
  const contacts = await Contact.findAll({ order: [['created_at', 'DESC']] });
  res.json(contacts);
};

const markAsRead = async (req, res) => {
  const contact = await Contact.findByPk(req.params.id);
  if (!contact) return res.status(404).json({ message: 'Pesan tidak ditemukan' });
  await contact.update({ is_read: true });
  res.json({ message: 'Pesan ditandai sudah dibaca' });
};

module.exports = { submitContact, getAllContacts, markAsRead };
