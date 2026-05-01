const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { subscribe, getAllSubscriptions } = require('../controllers/subscriptionController');

router.post('/', subscribe);
router.get('/', auth, getAllSubscriptions);

module.exports = router;
