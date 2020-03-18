const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post("/", (req, res) => {
  res.json(req.body);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
