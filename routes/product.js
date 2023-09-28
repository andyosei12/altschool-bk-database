const express = require('express');
const jwt = require('jsonwebtoken');
const verifyUser = require('../middlewares/user/verifyUser');
const { getProducts } = require('../controllers/product');

const router = express.Router();

router.get('/', verifyUser, getProducts);

module.exports = router;
