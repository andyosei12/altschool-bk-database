const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  name: { type: String, required: true },
});

const CategoryModel = mongoose.model('categories', CategorySchema);

module.exports = CategoryModel;
