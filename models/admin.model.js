const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  role_id: {
    type: Number,
    default: 2,
  },
});

const AdminModel = mongoose.model('admins', AdminSchema);

module.exports = AdminModel;
