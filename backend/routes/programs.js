const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { getAllPrograms, getProgramById, createProgram, updateProgram, deleteProgram } = require('../controllers/programController');

router.get('/', getAllPrograms);
router.get('/:id', getProgramById);
router.post('/', auth, upload.single('image'), createProgram);
router.put('/:id', auth, upload.single('image'), updateProgram);
router.delete('/:id', auth, deleteProgram);

module.exports = router;
