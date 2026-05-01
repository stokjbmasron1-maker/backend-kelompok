const { Teacher } = require('../models');

const getAllTeachers = async (req, res) => {
  const teachers = await Teacher.findAll();
  res.json(teachers);
};

const getTeacherById = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (!teacher) return res.status(404).json({ message: 'Pengajar tidak ditemukan' });
  res.json(teacher);
};

const createTeacher = async (req, res) => {
  const { name, credentials, role, bio } = req.body;
  if (!name) return res.status(400).json({ message: 'Nama wajib diisi' });
  const image_path = req.file ? `/uploads/${req.file.filename}` : null;
  const teacher = await Teacher.create({ name, credentials, role, bio, image_path });
  res.status(201).json(teacher);
};

const updateTeacher = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (!teacher) return res.status(404).json({ message: 'Pengajar tidak ditemukan' });
  const { name, credentials, role, bio } = req.body;
  const image_path = req.file ? `/uploads/${req.file.filename}` : teacher.image_path;
  await teacher.update({ name, credentials, role, bio, image_path });
  res.json(teacher);
};

const deleteTeacher = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (!teacher) return res.status(404).json({ message: 'Pengajar tidak ditemukan' });
  await teacher.destroy();
  res.json({ message: 'Pengajar berhasil dihapus' });
};

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };
