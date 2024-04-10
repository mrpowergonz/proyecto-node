const Edificio = require("./edificio.model");
const createEdificio =  async (req, res, next) => {
    try{
        const edificio = new Edificio(req.body);
        const edificioExist = await Edificio.findOne({producto:edificioSchema.producto});
        if (edificioExist){
            return new Error("Este edificio ya existe en la base");
        }
        const edificioDB = await edificio.save();
        return res.json({
            status: 201,
            message: "create",
            data: edificioDB
            
        })
    } catch(error) {
        return next(error)
    }
};

module.exports = {createEdificio};