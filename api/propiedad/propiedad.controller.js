const Propiedad  = require("./propiedad.model");
const createPropiedad  =  async (req, res, next) => {
    try{
        const propiedad  = new Propiedad (req.body);
        const propiedadExist = await Propiedad .findOne({
            numPropiedad : propiedad.numPropiedad ,
          });
        if (propiedadExist){
            return new Error("Esta propiedad ya existe en la base");
        }
        const propiedadDB = await propiedad.save();
        return res.json({
            status: 201,
            message: "create",
            data: propiedadDB,
            
        })
    } catch(error) {
        return next(error)
    }
};


const getAllPropiedades  = async (request, response) => {
    try {
      const propiedad  = await propiedad .find();
      response.json({
        status: 200,
        message: "found",
        data: propiedad ,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const updatePropiedades  = async (request, response) => {
    try {
      const propiedad = await Propiedad .findById(numPropiedad ); // delete
      
  
      const numPropiedad  = request.params.numPropiedad;
      // obtengo los datos que hay que editar del body 
  
      const body = request.body;
      // uso la funcion mongopara editar
  
      const updatedPropiedad  = await Client.findByIdAndUpdate(numPropiedad , body, {
        new: true,
      });
      // respondo al cliente
  
      response.json({
        status: 200,
        message: "updated",
        data: updatedPropiedad ,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const deletePropiedad  = async (request, response) => {
    try {
      const numPropiedad  = request.params.numPropiedad ;
      const propiedad  = await Client.findByIdAndDelete(numPropiedad );
      response.json({
        status: 200,
        message: "deleted",
        data: propiedad ,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    createPropiedad,
    getAllPropiedades,
    updatePropiedades,
    deletePropiedad,
  };