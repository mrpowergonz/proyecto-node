const express = require("express");


const {createEdificio} = require("./edificio.controller");
// const {isAuth} = require("../middleware/auth.middleware")
const edificioRouter = express.Router();



edificioRouter.post("/edificio", createEdificio);
module.exports = {edificioRouter}