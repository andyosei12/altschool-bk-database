const express = require('express');
const { registerUser, loginUser } = require('../controllers/user');
const validateUserCreation = require('../middlewares/user/validateUserCreation');
const validateLogin = require('../middlewares/user/validateLogin');
const router = express.Router();

router.post('/signup', validateUserCreation, registerUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;
