const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user');

dotenv.config();

const createUser = async (req, res) => {
  const userEmail = req.body.email;
  const existingUser = await User.findOne({ where: { email: userEmail } });
  if (existingUser) {
    return res.status(409).json({
      message: 'User already exists',
    });
  }

  // hash user password
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  const user = await User.create({
    ...req.body,
    id: uuidv4(),
    password: hashPassword,
    role_id: 1,
  });

  const token = jwt.sign(
    { email: user.email, name: user.name, contact: user.contact },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.status(201).json({
    token,
    user,
    message: 'User added successfully',
  });
};

module.exports = {
  createUser,
};
