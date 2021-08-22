const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    NewsImage: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('News',newsSchema);