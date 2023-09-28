const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  name: { type: String, required: true },
  email: { type: String, unique: true },
  contact: { type: String },
  password: { type: String, required: true },
  address: { type: String },
  role_id: { type: Number, default: 1 },
  created_at: { type: Date, default: new Date() },
});

// before save
UserSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
