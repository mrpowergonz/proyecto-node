const multer = require('multer'); // npm i multer
const path = require('path');
const fs = require('fs');
require("dotenv").config();
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: false
});
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../../../public/uploads');
        console.log(folder)
        cb(null, folder);
    },
    onError: function (error, next) {
        console.error('storage error', error);
        next(error);
    },
    createParentPath: true
})
const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
const fileFilter = (req, file, cb) => {
    if (!VALID_FILE_TYPES.includes(file.mimetype)) {//si no incluyes un archivo asi 
        const error = new Error('File type not supported');
        cb(error);
    } else {
        cb(null, true);//cualquier otra cosa no registra error y lo sube
    }
}
const upload = multer({ storage, fileFilter });//para que suba el objeto
const uploadToCloudinary = async (req, res, next) => {
    if (req.file) {
        try {
            const image = await cloudinary.uploader.upload(req.file.path);
            await fs.unlinkSync(req.file.path)
            req.file_url = image.secure_url;
            return next()
        } catch (error) {
            return next(error)
        }
    }
}
module.exports = { upload, uploadToCloudinary }