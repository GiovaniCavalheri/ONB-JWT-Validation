const express = require("express");
const authentication = require("./routes/authentication");
const appService = express();


appService.use(express.json());
appService.use(express.urlencoded({ extended: true }));

appService.use(authentication);

const PORT = 3000;
appService.listen(PORT, () =>
  console.log(`Servidor rodando Perfeitamente: http://localhost:${PORT}/`)
);
