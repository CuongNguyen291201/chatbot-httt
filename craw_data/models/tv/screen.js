const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScreenSchema = new Schema({
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

const ScreenModel = mongoose.model("Screen", ScreenSchema);

module.exports = ScreenModel;

