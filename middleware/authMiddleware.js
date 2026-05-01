const jwt = require('jsonwebtoken');

// Middleware to verify if user is authenticated
exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    const verified = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token.' });
  }
};

// Middleware to restrict access to Admins only
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied. Admins only.' });
  }
  next();
};