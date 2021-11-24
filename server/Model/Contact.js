const mongoose = require('mongoose');



const contactSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required: true
    },
    status:{
        type:Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);