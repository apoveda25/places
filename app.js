const express = require("express");

const app = express();

const places = [
  {
    title: "Oficina de CodigoFacilito",
    description: "Lorem Ipsum",
    address: "Lorem Ipsum"
  },
  {
    title: "Oficina de CodigoFacilito",
    description: "Lorem Ipsum",
    address: "Lorem Ipsum"
  },
  {
    title: "Oficina de CodigoFacilito",
    description: "Lorem Ipsum",
    address: "Lorem Ipsum"
  },
  {
    title: "Oficina de CodigoFacilito",
    description: "Lorem Ipsum",
    address: "Lorem Ipsum"
  }
];

app.get("/", (req, res) => {
  res.json(places);
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Estoy listo para escuchar peticiones");
});
