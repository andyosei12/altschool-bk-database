const Product = require('../models/product.model');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Error fetching products',
    });
  }
};

module.exports = {
  getProducts,
};
