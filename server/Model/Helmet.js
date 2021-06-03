const mongoose = require('mongoose');


const helmetShcema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    price: {
        type: String
    },
    distributor: {
        type: String,
        trim: true,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HelmetBrand',
        required: true
    },
    helmetImage :{
        type:String
    }
}, { timestamps: true });

module.exports = mongoose.model("Helmet", helmetShcema);