const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoleShema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const RoleModel = mongoose.model('roles', RoleShema);

module.exports = RoleModel;
