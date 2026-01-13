const express = require("express");

const authentication = express.Router();

const authenticationController = require("../controllers/authCreateController");
const validateEmailMiddleware = require("../middlewares/validateEmail-middleware");
const validadeNameMiddleware = require("../middlewares/validateName-middleware");
const validaPasswordMiddleware = require("../middlewares/validatePassword-middleware");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdminMiddleware = require("../middlewares/isAdmin-middleware");

authentication.get(
  "/admin/test",
  authMiddleware,
  isAdminMiddleware,
  (req, res) => {
    res.json({ message: "is admin" });
  }
);

authentication.post(
  "/register",
  validateEmailMiddleware,
  validadeNameMiddleware,
  validaPasswordMiddleware,
  authenticationController.register
);

authentication.post("/login", authenticationController.login);

module.exports = authentication;
