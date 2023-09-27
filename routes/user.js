const express = require('express');
const { createUser } = require('../controllers/user');
const validateUserCreation = require('../middlewares/validateUserCreation');

const router = express.Router();

router.post('/signup', validateUserCreation, createUser);

module.exports = router;
