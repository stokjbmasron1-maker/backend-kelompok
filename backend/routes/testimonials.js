const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllTestimonials, createTestimonial, deleteTestimonial } = require('../controllers/testimonialController');

router.get('/', getAllTestimonials);
router.post('/', auth, createTestimonial);
router.delete('/:id', auth, deleteTestimonial);

module.exports = router;
