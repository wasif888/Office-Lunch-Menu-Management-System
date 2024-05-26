const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const { isTokenBlacklisted } = require('../controllers/authController');

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      if (isTokenBlacklisted(token)) {
        return res.status(401).json({ message: 'Token is invalidated' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Employee.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };
