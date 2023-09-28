const express = require('express');
const { registerUser } = require('../controllers/user');
const validateUserCreation = require('../middlewares/user/validateUserCreation');
const router = express.Router();

router.post('/signup', validateUserCreation, registerUser);

module.exports = router;
