const jwt = require("jsonwebtoken");

const users = require("../models/users");

const secretKey = "vegeta-is-better-than-Goku";

const authenticationController = {
  //POST /authentication/register
  register: (req, res) => {
    const { name, email, password } = req.body;

    const newUser = {
      id: Math.floor(Math.random() * 99999),
      name,
      email,
      password,
      role: "standard",
    };

    users.push(newUser);
    return res.status(201).json({
      message: "User created successfully!",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  },

  // ==> Login
  //POST /authentication/login
  login: (req, res) => {
    const { email, password } = req.body;

    const findEmail = users.find((user) => user.email === email);

    if (!findEmail) {
      return res.status(400).json({ message: "Invalid Credentials." });
    }

    const findPassword = users.find((user) => user.password !== password);

    if (!findPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const payload = { id, name, email, role };

    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    res.json({ token });
  },
};

module.exports = authenticationController;
