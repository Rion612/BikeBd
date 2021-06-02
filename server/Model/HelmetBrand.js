const mongoose = require('mongoose');


const helmetBrandSchema = new mongoose.Schema({
    name : {
        type :String,
        required :true,
        trim : true
    },
    slug :{
        type : String,
        unique :true,
        required :true
    },
    hbrandImage :{
        type :String,
        required:true
    },
    description :{
        type :String,
        required :true,
        trim :true
    },


},{ timestamps: true});

module.exports = mongoose.model("HelmetBrand", helmetBrandSchema);