const mongoose = require('mongoose');

const bikeBrandSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true,
       trim:true
    },
    slug:{
        type:String,
        unique:true,
        required:true
    },
    brandImage:{
        type:String
    }
    

},{timestamps:true});


module.exports = mongoose.model("BikeBrand",bikeBrandSchema);