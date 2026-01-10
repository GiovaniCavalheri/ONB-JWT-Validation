const express = require("express");
const appService = express();

appService.use(express.json());
appService.use(express.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando Perfeitamente: http://localhost:${PORT}/`)
);
