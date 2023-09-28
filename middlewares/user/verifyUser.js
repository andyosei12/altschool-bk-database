const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
  const [_, token] = req.headers.authorization.split(' ');
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    // check for jwt expiration
    if (user.exp * 1000 < Date.now()) {
      return res.status(401).json({
        error: true,
        message: 'Token expired',
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: 'Invalid token',
    });
  }
};

module.exports = verifyUser;
