const jwt = require("jsonwebtoken");
const secretKey = "vegeta-is-better-than-Goku";

const welcomeController = (req, res) => {
  const authHeader = req.headers.authorization; // ✅ Corrigido

  if (!authHeader) {
    return res.json({ message: "Bem-vindo(a), Visitante!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedtoken = jwt.verify(token, secretKey);
    const username = decodedtoken.name; 

    return res.json({
      message: `Bem-vindo(a), ${username}!`,
    });
  } catch (error) {
    return res.json({
      message: "Bem-vindo(a), Visitante!",
    });
  }
};

module.exports = welcomeController;
