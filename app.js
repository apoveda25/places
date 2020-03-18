const express = require("express");
const bodyParser = require("body-parser");
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./api/openapi.json");

const app = express();
const port = process.env.PORT || 5000;

// const swaggerOptions = {
//   swaggerDefinition: swaggerDocument,
//   apis: ["app.js"]
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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

// Routes
/**
 * @swagger
 * /:
 *  get:
 *    tags: ["home"]
 *    summary: "Update an existing pet"
 *    operationId: "updatePet"
 *    requestBody:
 *      description: "Use to request all places"
 *      content:
 *        "application/json":
 *          schema:
 *            "$ref": "#/components/schemas/Pet"
 *      required: true
 *    responses:
 *      "200":
 *        description: "A successful response"
 *      "400":
 *        description: "Invalid ID supplied"
 *        content:
 *      "404":
 *        description: "Pet not found"
 *        content:
 *      "405":
 *        description: "Validation exception"
 *        content:
 *    security:
 *      petstore_auth: ["write:pets", "read:pets"]
 *    "x-codegen-request-body-name": "body"
 */
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
