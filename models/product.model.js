const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image_url: { type: String },
  description: { type: String },
  category_id: { type: String, required: true },
  created_at: { type: Date, default: new Date() },
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;
