const mongoose = require("mongoose"); 

const fileSchema = new mongoose.Schema({
path: {
    type: String,
    trim: true,
},
});

const file = mongoose.model("file", fileSchema);

module.exports = file;