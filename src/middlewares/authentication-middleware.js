const jwt = require("jsonwebtoken");

// ==> Definindo key p/ assinatura;

const secretKey = "vegeta-is-better-than-Goku";

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ==> cabeçalho de autorização obrigatório
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header required" });
  }
}

// => extraindo sem 'bearer'
const extractingToken = authHeader.split(' ')[1]; 

try {
    const decodedToken = jwt.verify(extractingToken, secretKey);
    console.log(decodedToken)
} catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
}