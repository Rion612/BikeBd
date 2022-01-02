const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {
        type: string,
        required: true,
        trim: true
    },
    reviwer_name: {
        type: string,
        required: true
    },
    bike: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Bike',
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Review',reviewSchema);