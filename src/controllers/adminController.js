const users = require("../models/users");

const adminController = {
  // GET /users
  getAllUsers: (req, res) => {
    const allUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    });
    res.json(allUsers);
  },

  //post /users/admin
  createUserAdmin: (req, res) => {
    const { name, email, password } = req.body;

    const newAdmin = {
      id: Math.floor(Math.random() * 99999),
      name,
      email,
      password,
      role: "admin",
    };
    users.push(newAdmin);
    return res.status(201).json({
      message: "Admin created successfully!",
      user: {
        id: newAdmin.id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  },

  //delete users/:id
  deleteUser: (req, res) => {
    const { id } = req.params;

    // ==> verificando se esta deletando a si mesmo;
    if (req.authenticatedUser.id == id) {
      return res.status(400).json({ message: "It's impossible to exclude oneself." });
    }

    const userIndex = users.findIndex((user) => user.id === Number(id));

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not Found" });
    }

    users.splice(userIndex, 1);

    res.status(200).json({ message: "The user was successfully deleted." });
  },
};

module.exports = adminController;
