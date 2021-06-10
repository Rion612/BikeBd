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
exports.getHelmetBrand = (req,res)=>{
    HelmetBrand.find({})
    .exec((error,helmetBrand)=>{
        if(error)
        {
            return res.status(400).json({
                message:"Something Wrong"
            });
        }
        else if(helmetBrand)
        {
            
            return res.status(200).json(
               {helmetBrand}
            );
        }
    });
    }
    exports.editHelmetBrand = (req, res) => {
        const updateObj = {};
        if (req.body.name) {
            updateObj.name = req.body.name;
        }
        if (req.body.description) {
            updateObj.description = req.body.description;
        }
        if (req.file) {
            updateObj.hbrandImage = process.env.API_URL + 'public/' + req.file.filename;
        }
    
        HelmetBrand.findOneAndUpdate({ _id: req.body._id }, {
            "$set": updateObj,
            "$currentDate": { lastModified: true }
        })
            .exec((error, result) => {
                if (result) {
                    HelmetBrand.findOne({ _id: result._id })
                        .exec((error, helmetbrand) => {
                            if (error) {
                                return res.status(400).json({
                                    message: "Something Wrong"
                                });
                            }
                            else if (helmetbrand) {
    
                                return res.status(200).json(
                                    { helmetbrand }
                                );
                            }
    
                        })
                }
                else {
                    return res.status(400).json({
                        error
                    });
    
                }
    
            })
    }
    exports.deleteHelmetBrand= (req, res) => {
        HelmetBrand.findOneAndDelete({ _id: req.body._id })
            .exec((error, helmetbrand) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something Wrong"
                    });
                }
                else if (helmetbrand) {
    
                    return res.status(200).json(
                        { message: "Item is deleted successfully" }
                    );
                }
    
            })
    }