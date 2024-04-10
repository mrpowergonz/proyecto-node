const express = require("express");

const {
  createPropietario,
  getAllPropietarios,
  updatePropietarios,
  deletePropietario,
} = require("../propietario/propietario.controller");
const { isAuth } = require("../middleware/auth.middleware");
const propietarioRouter = express.Router();

propietarioRouter.post("/", createPropietario);
propietarioRouter.get("/", getAllPropietarios);
propietarioRouter.patch("/", updatePropietarios);
propietarioRouter.delete("/", deletePropietario);
module.exports = { propietarioRouter };