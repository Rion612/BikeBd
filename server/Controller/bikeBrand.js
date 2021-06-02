const slugify = require('slugify');

const BikeBrand = require('../Model/Bikebrand');



exports.createBikeBrand = (req,res)=>{
    const brandObj = {
        name:req.body.name,
        slug:slugify(req.body.name),
        description : req.body.description
        
    }
    if(req.file){
        brandObj.brandImage = process.env.API_URL+'public/'+ req.file.filename;

    }
    const Bikeb = new BikeBrand(brandObj);
    Bikeb.save((error,bikeBrand)=>{
        if(error){
            res.status(400).json({
                message : "Something happend wrong!"
            });
        }
        else{
            res.status(201).json({bikeBrand});
        }
    })
}

exports.getBikeBrand = (req,res)=>{
    BikeBrand.find({})
    .exec((error,bikeBrand)=>{
        if(error)
        {
            return res.status(400).json({
                message:"Something Wrong"
            });
        }
        else if(bikeBrand)
        {
            
            return res.status(200).json(
               {bikeBrand}
            );
        }
    });
    }
    exports.editBrand = (req, res) => {
        const updateObj = {};
        if (req.body.name) {
            updateObj.name = req.body.name;
        }
        if (req.body.description) {
            updateObj.description = req.body.description;
        }
        if (req.file) {
            updateObj.brandImage = process.env.API_URL + 'public/' + req.file.filename;
        }
    
        BikeBrand.findOneAndUpdate({ _id: req.body._id }, {
            "$set": updateObj,
            "$currentDate": { lastModified: true }
        })
            .exec((error, result) => {
                if (result) {
                    BikeBrand.findOne({ _id: result._id })
                        .exec((error, bikebarnd) => {
                            if (error) {
                                return res.status(400).json({
                                    message: "Something Wrong"
                                });
                            }
                            else if (bikebarnd) {
    
                                return res.status(200).json(
                                    { bikebarnd }
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
    exports.deleteBrand= (req, res) => {
        BikeBrand.findOneAndDelete({ _id: req.body._id })
            .exec((error, bikebrand) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something Wrong"
                    });
                }
                else if (bikebrand) {
    
                    return res.status(200).json(
                        { message: "Item is deleted successfully" }
                    );
                }
    
            })
    }