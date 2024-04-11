const express = require("express");

const fileRouter = express.Router();

const { createFile } = require("./file.controller");

const  {upload} = require("../middleware/file.middleware");


fileRouter.post("/",[upload.single("path")], createFile);

module.exports =  {fileRouter}; 