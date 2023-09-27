const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');

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

  console.log(user);
};

module.exports = {
  createUser,
};
