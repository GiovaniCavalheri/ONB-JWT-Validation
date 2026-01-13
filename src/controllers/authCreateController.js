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

    const user = users.find((user) => user.email === email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    try {
      const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
      res.json({
        message: "Login successful!",
        token,
      });
    } catch (error) {
      console.error("Erro ao gerar token:", error);
      res.status(500).json({ message: "Error generating token" });
    }

    res.json({
      message: "Login successful!",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  },
};

module.exports = authenticationController;
