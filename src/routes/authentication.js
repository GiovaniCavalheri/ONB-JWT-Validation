const express = require("express");

const authentication = express.Router();

const authenticationController = require("../controllers/authCreateController");
const validateEmailMiddleware = require("../middlewares/validateEmail-middleware");
const validadeNameMiddleware = require("../middlewares/validateName-middleware");
const validaPasswordMiddleware = require("../middlewares/validatePassword-middleware");

authentication.post("/register",
  validateEmailMiddleware,
  validadeNameMiddleware,
  validaPasswordMiddleware,
  authenticationController.register
);

module.exports = authentication;
