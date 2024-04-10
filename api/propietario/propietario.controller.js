const Propietario = require("./propietario.model");


const createPropietario = async (req, res, next) => {
  try {
    const propietario = new Propietario(req.body);
    const propietarioExist = await Propietario.findOne({ id_propietario: propietario.id_propietario });
    if (propietarioExist) {
      return new Error("Este Propietario ya existe en la base");
    }
    const propietarioDB = await propietario.save();
    return res.json({
      status: 201,
      message: "create",
      data: propietarioDB,
    });
  } catch (error) {
    return next(error);
  }
};

const updatePropietarios = async (request, response) => {
  try {
    const Propietario = await Propietario.findById(id); // delete
    // busco por id el propietario

    const id = request.params.id;
    // obtengo los datos que hay que editar del body / payload

    const body = request.body;
    // uso la funcion mongo que sirve para editar cosas

    const updatedPropietario = await Propietario.findByIdAndUpdate(id, body, {
      new: true,
    });
    // respondo al cliente

    response.json({
      status: 200,
      message: "updated",
      data: updatedPropietario,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllPropietarios = async (request, response) => {
  try {
    const propietarios = await Propietario.find();
    response.json({
      status: 200,
      message: "found",
      data: propietarios,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePropietario = async (request, response) => {
  try {
    const id_propietario = request.params.id_propietario;
    const propietario = await Client.findByIdAndDelete(id_propietario);
    response.json({
      status: 200,
      message: "deleted",
      data: propietario,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPropietario, getAllPropietarios, updatePropietarios, deletePropietario };