const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");

const propiedadSchema = new mongoose.Schema({
    numContract: { type: Number, trim: true, required: true },
    coste: {type:Number, trim:true, required:true},
    formaPago: {type:String, trim:true, required:true},
    dirPago: {type:String, trim:true, required:true},
    services:[{ type: mongoose.Schema.Types.ObjectId, ref: "Service"}]
});

const Propiedad = mongoose.model("Propiedad", propiedadSchema);

module.exports = {Propiedad}