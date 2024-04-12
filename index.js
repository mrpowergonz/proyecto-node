const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { propietarioRouter } = require("./api/propietario/propietario.router");
const { connectMongo } = require("./utils/db");
const {
  notFoundHandler,
  errorHandler,
} = require("./api/middleware/error.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./api-docs/swagger");

const { propiedadRouter } = require("./api/propiedad/propiedad.router");
const { edificioRouter } = require("./api/edificio/edificio.router");
const { fileRouter } = require("./api/file/file.router");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongo();

app.use(
  "/swagger-ui",
  express.static(require("swagger-ui-dist").getAbsoluteFSPath())
);

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

  app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL })
);

app.get("/", (req, res) => {
  res.send("hola");
});
app.use("/edificio", edificioRouter);
app.use("/propiedad", propiedadRouter);
app.use("/propietario", propietarioRouter);
app.use("/file" , fileRouter);

//5. Listen
app.listen(PORT, () => {
  console.log("Servidor iniciado en puerto: " + PORT);
});