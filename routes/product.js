const express = require('express');
const verifyUser = require('../middlewares/user/verifyUser');
const { getProducts } = require('../controllers/product');

const router = express.Router();

router.get('/', verifyUser, getProducts);

module.exports = router;
