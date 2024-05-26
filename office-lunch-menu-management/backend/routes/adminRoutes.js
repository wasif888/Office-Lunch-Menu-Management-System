const express = require('express');
const { getChoices, addMenu } = require('../controllers/adminController');
const router = express.Router();

router.get('/choices', getChoices);
router.post('/menu', addMenu);

module.exports = router;
