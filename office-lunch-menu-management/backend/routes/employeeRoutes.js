const express = require('express');
const { makeChoice } = require('../controllers/employeeController');
const router = express.Router();

router.post('/choice', makeChoice);

module.exports = router;
