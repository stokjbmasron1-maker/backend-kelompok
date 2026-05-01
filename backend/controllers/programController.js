const { Program, ProgramFeature } = require('../models');

const getAllPrograms = async (req, res) => {
  const programs = await Program.findAll({ include: [{ model: ProgramFeature, as: 'features', order: [['order_num', 'ASC']] }] });
  res.json(programs);
};

const getProgramById = async (req, res) => {
  const program = await Program.findByPk(req.params.id, { include: [{ model: ProgramFeature, as: 'features', order: [['order_num', 'ASC']] }] });
  if (!program) return res.status(404).json({ message: 'Program tidak ditemukan' });
  res.json(program);
};

const createProgram = async (req, res) => {
  const { name, level, description, price, schedule_days, schedule_time, features } = req.body;
  if (!name) return res.status(400).json({ message: 'Nama program wajib diisi' });
  const image_path = req.file ? `/uploads/${req.file.filename}` : null;
  const program = await Program.create({ name, level, description, price, schedule_days, schedule_time, image_path });
  if (features && Array.isArray(features)) {
    const featureData = features.map((f, i) => ({ program_id: program.id, feature_text: f, order_num: i + 1 }));
    await ProgramFeature.bulkCreate(featureData);
  }
  res.status(201).json(program);
};

const updateProgram = async (req, res) => {
  const program = await Program.findByPk(req.params.id);
  if (!program) return res.status(404).json({ message: 'Program tidak ditemukan' });
  const { name, level, description, price, schedule_days, schedule_time, features } = req.body;
  const image_path = req.file ? `/uploads/${req.file.filename}` : program.image_path;
  await program.update({ name, level, description, price, schedule_days, schedule_time, image_path });
  if (features && Array.isArray(features)) {
    await ProgramFeature.destroy({ where: { program_id: program.id } });
    const featureData = features.map((f, i) => ({ program_id: program.id, feature_text: f, order_num: i + 1 }));
    await ProgramFeature.bulkCreate(featureData);
  }
  res.json(program);
};

const deleteProgram = async (req, res) => {
  const program = await Program.findByPk(req.params.id);
  if (!program) return res.status(404).json({ message: 'Program tidak ditemukan' });
  await ProgramFeature.destroy({ where: { program_id: program.id } });
  await program.destroy();
  res.json({ message: 'Program berhasil dihapus' });
};

module.exports = { getAllPrograms, getProgramById, createProgram, updateProgram, deleteProgram };
