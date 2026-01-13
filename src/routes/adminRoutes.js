const express = require("express");

const protectedAdmin = express.Router();

const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdminMiddleware = require("../middlewares/isAdmin-middleware");
const validadeNameMiddleware = require("../middlewares/validateName-middleware");
const validateEmailMiddleware = require("../middlewares/validateEmail-middleware");
const validaPasswordMiddleware = require("../middlewares/validatePassword-middleware");

// ==> rota para all users;
protectedAdmin.get("/users", adminController.getAllUsers);

// ==> rota para create adm;
protectedAdmin.post(
  "/users/admin",
  authMiddleware,
  isAdminMiddleware,
  validadeNameMiddleware,
  validateEmailMiddleware,
  validaPasswordMiddleware,
  adminController.createUserAdmin
);

// ==> rota delete admin
protectedAdmin.delete(
  "/users/:id",
  authMiddleware,
  isAdminMiddleware,
  adminController.deleteUser
);

module.exports = protectedAdmin;
