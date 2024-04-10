const mongoose = require("mongoose"); 
const{validationDNI}=require("../../utils/validate");
const Propiedad = require("../propiedad/propiedad.model");
const propietarioSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    surname: { type: String, trim: true, required: true },
    id_client: {type:String, trim:true, required:true},
    dni_client: {type:String, trim:true, required:true},
    propiedad: [{ type: mongoose.Schema.Types.ObjectId, ref: "Propiedad"}]
});
propietarioSchema.pre("save", function(next){
    if(!validationDNI(this.dni_client)){
        return new Error("Numero de DNI no valido");
    }
})

const Propietario = mongoose.model("Propietario", propietarioSchema);

module.exports = Propietario;