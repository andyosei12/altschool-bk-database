const User = require('../models/user');

const createUser = async (req, res) => {
  const userEmail = req.body.email;
  const existingUser = await User.findOne({ where: { email: userEmail } });
  if (existingUser) {
    return res.status(409).json({
      message: 'User already exists',
    });
  }
};

module.exports = {
  createUser,
};
