const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const UserModel = require('../models/user.model');

dotenv.config();

const registerUser = async (req, res) => {
  //   Check if email exists
  try {
    const existingUser = await UserModel.find({ email: req.body.email });
    if (existingUser.length > 0) {
      return res.status(409).json({
        message: 'User already exists',
      });
    }

    const user = await UserModel.create({
      ...req.body,
      role_id: 1,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(201).json({
      token,
      user,
      message: 'User added successfully',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'An error occured',
    });
  }
};

module.exports = {
  registerUser,
};
