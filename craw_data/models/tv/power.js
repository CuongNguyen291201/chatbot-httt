const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PowerSchema = new Schema({
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

const PowerModel = mongoose.model("Power", PowerSchema);

module.exports = PowerModel;