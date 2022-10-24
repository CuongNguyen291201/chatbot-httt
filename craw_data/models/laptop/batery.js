const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaterySchema = new Schema({
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

const BateryModel = mongoose.model("Batery", BaterySchema);

module.exports = BateryModel;