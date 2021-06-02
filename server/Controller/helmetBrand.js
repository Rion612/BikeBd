const HelmetBrand = require('../Model/HelmetBrand');

const slugify = require('slugify');

exports.createHelemetBrand = (req,res)=>{
    const brandObj ={
        name : req.body.name,
        slug : slugify(req.body.name),
        description : req.body.description
    }
    if(req.file){
        brandObj.hbrandImage = process.env.API_URL+'public/'+ req.file.filename;
    }
    const helmetbrand = new HelmetBrand(brandObj);

    helmetbrand.save((error,helmetbrands)=>{
        if(error){
            return res.status(400).json({
                message : "Something wrong !"
            })
        }
        else{
            return res.status(201).json({
                helmetbrands
            })
        }
    })
}