const mongoose = require('mongoose');

const bikeCategorySchema = new mongoose.Schema({
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
    categoryImage:{
        type:String
    }
    

},{timestamps:true});


module.exports = mongoose.model("BikeCategory",bikeCategorySchema);