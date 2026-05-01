const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { submitContact, getAllContacts, markAsRead } = require('../controllers/contactController');

router.post('/', submitContact);
router.get('/', auth, getAllContacts);
router.patch('/:id/read', auth, markAsRead);

module.exports = router;
