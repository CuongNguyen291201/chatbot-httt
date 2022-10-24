const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HardDriveSchema = new Schema({
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

const HardDriveModel = mongoose.model("HardDrive", HardDriveSchema);

module.exports = HardDriveModel;