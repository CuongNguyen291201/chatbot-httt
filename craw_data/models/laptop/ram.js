const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RamSchema = new Schema({
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

const RamModel = mongoose.model("Ram", RamSchema);

module.exports = RamModel;