const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { propietarioRouter } = require("./api/propietario/propietario.router");
const { connectMongo } = require("./utils/db");
const {
  notFoundHandler,
  errorHandler,
} = require("./api/middleware/error.middleware");

const { propiedadRouter } = require("./api/propiedad/propiedad.router");
const { edificioRouter } = require("./api/edificio/edificio.router");
const { fileRouter } = require("./api/file/file.router");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongo();
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