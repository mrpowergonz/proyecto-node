const mongoose = require("mongoose"); 
const edificioSchema = new mongoose.Schema({
producto:{ type:String, required: true, enum:["CASABLANCA", "PAPAGAYO","SUITE"]}  
});

const Edificio = mongoose.model("Edificio", edificioSchema);

module.exports = Edificio;
  