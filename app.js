const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Estoy listo para escuchar peticiones");
});
