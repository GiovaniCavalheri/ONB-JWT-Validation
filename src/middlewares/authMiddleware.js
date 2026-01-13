const jwt = require("jsonwebtoken");
const secretKey = "vegeta-is-better-than-Goku";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ==> nao enviado ?? === nao enviou Token/nao existe
  if (!authHeader) {
    return res.status(401).json({ message: "User does not exist" });
  }

  // ==> extrai somente o token, sem 'bearer'
  const extractToken = authHeader.split(" ")[1];

  try {
    const decodedtoken = jwt.verify(extractToken, secretKey);

    req.authenticatedUser = decodedtoken;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
