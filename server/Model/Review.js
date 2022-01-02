const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true,
        trim: true
    },
    reviwer_name: {
        type: String,
        required: true
    },
    bike: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Bike',
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Review',reviewSchema);