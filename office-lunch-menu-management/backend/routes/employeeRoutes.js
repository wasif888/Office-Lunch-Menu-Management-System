const express = require('express');
const { makeChoice } = require('../controllers/employeeController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/choice', protect, makeChoice);

module.exports = router;
