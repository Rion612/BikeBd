const mongoose = require('mongoose');


const showroomSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    district: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    thana: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    cellNo: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model("Showroom",showroomSchema);