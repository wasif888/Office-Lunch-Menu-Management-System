const blacklist = new Set();

const logout = (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  blacklist.add(token);
  res.json({ message: 'Logged out successfully' });
};

const isTokenBlacklisted = (token) => {
  return blacklist.has(token);
};

module.exports = { logout, isTokenBlacklisted };
