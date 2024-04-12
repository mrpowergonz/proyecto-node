const File = require("./file.model");

/**
 * @swagger
 * /api/files/create:
 *   post:
 *     summary: Create a new file.
 *     description: Endpoint to create a new file and save its path.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 201
 *                 data:
 *                   $ref: '#/components/schemas/File'
 *                 msg:
 *                   type: string
 *                   example: "file created"
 *       500:
 *         description: Internal server error.
 */
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