const express = require("express");

const {
  createPropiedad,
  getAllPropiedades,
  updatePropiedades,
  deletePropiedad,
} = require("./propiedad.controller");
const { isAuth } = require("../middleware/auth.middleware");
const propiedadRouter = express.Router();

propiedadRouter.post("/", createPropiedad);
propiedadRouter.get("/", getAllPropiedades);
propiedadRouter.patch("/", updatePropiedades);
propiedadRouter.delete("/", deletePropiedad);

module.exports = { propiedadRouter };