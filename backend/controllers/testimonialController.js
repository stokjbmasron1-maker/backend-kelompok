const { Testimonial } = require('../models');

const getAllTestimonials = async (req, res) => {
  const testimonials = await Testimonial.findAll();
  res.json(testimonials);
};

const createTestimonial = async (req, res) => {
  const { name, role_type, quote } = req.body;
  if (!name || !role_type || !quote) {
    return res.status(400).json({ message: 'Nama, tipe, dan kutipan wajib diisi' });
  }
  const testimonial = await Testimonial.create({ name, role_type, quote });
  res.status(201).json(testimonial);
};

const deleteTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByPk(req.params.id);
  if (!testimonial) return res.status(404).json({ message: 'Testimonial tidak ditemukan' });
  await testimonial.destroy();
  res.json({ message: 'Testimonial berhasil dihapus' });
};

module.exports = { getAllTestimonials, createTestimonial, deleteTestimonial };
