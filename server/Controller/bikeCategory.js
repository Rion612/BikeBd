const slugify = require('slugify');

const BikeCategory = require('../Model/Bike.Category');



exports.createBikeCategory = (req,res)=>{
    const categoryObj = {
        name:req.body.name,
        slug:slugify(req.body.name),
        
    }
    if(req.file){
        categoryObj.categoryImage = process.env.API_URL+'public/'+ req.file.filename;

    }
    const Bikecat = new BikeCategory(categoryObj);
    Bikecat.save((error,bikeCategory)=>{
        if(error){
            res.status(400).json({error});
        }
        else{
            res.status(201).json({bikeCategory});
        }
    })
}

exports.getBikeCategory = (req,res)=>{
    BikeCategory.find({})
    .exec((error,bikeCategory)=>{
        if(error)
        {
            return res.status(400).json({
                message:"Something Wrong"
            });
        }
        else if(bikeCategory)
        {
            
            return res.status(200).json(
               {bikeCategory}
            );
        }
    });
    }