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
            res.status(400).json({error});
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