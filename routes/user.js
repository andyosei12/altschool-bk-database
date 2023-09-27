const express = require('express');
const { createUser, loginUser } = require('../controllers/user');
const validateUserCreation = require('../middlewares/user/validateUserCreation');
const validateLogin = require('../middlewares/user/validateLogin');

const router = express.Router();

router.post('/signup', validateUserCreation, createUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;
