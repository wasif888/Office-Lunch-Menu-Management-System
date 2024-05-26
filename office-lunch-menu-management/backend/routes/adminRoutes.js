const express = require('express');
const { getChoices, addMenu } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/choices', protect, admin, getChoices);
router.post('/menu', protect, admin, addMenu);

module.exports = router;
