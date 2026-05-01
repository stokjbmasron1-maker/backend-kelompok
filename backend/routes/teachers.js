const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');

router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.post('/', auth, upload.single('image'), createTeacher);
router.put('/:id', auth, upload.single('image'), updateTeacher);
router.delete('/:id', auth, deleteTeacher);

module.exports = router;
