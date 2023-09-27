const express = require('express');
const { createUser } = require('../controllers/user');

const router = express.Router();

router.get('/signup', createUser);

module.exports = router;
