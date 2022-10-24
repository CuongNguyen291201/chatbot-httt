const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CameraSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    images: {
        type: Array
    }
});

const CameraModel = mongoose.model("Camera", CameraSchema);

module.exports = CameraModel;