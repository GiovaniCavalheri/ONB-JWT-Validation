const users = require("../models/users");

const validateEmailMiddleware = (req, res, next) => {
  const { email } = req.body;

  const findEmail = users.find(user => user.email === email);

  if(findEmail) {
    return res.status(409).json({ message: 'The email is duplicated' });
  }

  if (!email) {
    return res.status(400).json({ message: "Email is Required!" });
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  next();
};

module.exports = validateEmailMiddleware;
