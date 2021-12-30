const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    bike: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Bike',
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Rating',ratingSchema);

