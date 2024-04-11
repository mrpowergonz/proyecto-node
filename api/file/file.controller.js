const File = require("./file.model");

const createFile = async (req, res, next ) =>{
    try {
        const path = req.file ? req.file.path : "";


        const file =  await File.create({ path });
        await file.save();
        req.json({
            status: 201,
            data:file,
            msg: "file created",
        })
    } catch (error) {
        next(error);
        
    }
};


module.exports = { createFile };