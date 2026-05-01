const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllFAQs, createFAQ, updateFAQ, deleteFAQ } = require('../controllers/faqController');

router.get('/', getAllFAQs);
router.post('/', auth, createFAQ);
router.put('/:id', auth, updateFAQ);
router.delete('/:id', auth, deleteFAQ);

module.exports = router;
