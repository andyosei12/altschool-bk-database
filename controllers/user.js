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
    { email: user.email, id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.status(201).json({
    token,
    user,
    message: 'User added successfully',
  });
};

const loginUser = async (req, res) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  const user = await User.findOne({ where: { email: emailInput } });
  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'User does not exist. Try signing up',
    });
  }

  //  Check user password
  bcrypt.compare(passwordInput, user.password, function (err, data) {
    if (data) {
      const token = jwt.sign(
        { email: user.email, id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      return res.status(200).json({
        message: 'Login successfully',
        token,
        user,
      });
    } else {
      return res.status(401).json({
        error: true,
        message: 'Invalid email or password',
      });
    }
  });
};

module.exports = {
  createUser,
  loginUser,
};
