const Helmet = require('../Model/Helmet');
const slugify = require('slugify');
const HelmetBrand = require('../Model/HelmetBrand');



exports.createHelmet = (req,res)=>{
    const helmetObj ={
        name : req.body.name,
        slug : slugify(req.body.name),
        price : req.body.price,
        distributor : req.body.distributor,
        brand : req.body.brand
        
    }
    if(req.file){
        helmetObj.helmetImage = process.env.API_URL + 'public/'+req.file.filename;
    }
    const helmet = new Helmet(helmetObj);
    helmet.save((error,_helmet)=>{
        if(error){
            return res.status(400).json({
                error
            })
        }
        else{
            return res.status(201).json({
                _helmet
            })
        }
    })
}

exports.gethelmets =(req,res)=>{
    const { slug } =req.params;

    HelmetBrand.findOne({slug : slug})
    .exec((error,brand)=>{
        if(error){
            return res.status(400).json({
                error
            })

        }
        else if(brand){
            Helmet.find({brand : brand._id})
            .exec((error,helmets)=>{
                if(error){
                    return res.status(400).json({
                        error
                    })
        
                }
                else{
                    return res.status(200).json({
                        helmets
                    })

                }
            })
        }
    })
}
exports.getAllHelmet = (req,res)=>{
    Helmet.find({})
    .exec((error,helmets)=>{
        if(error){
            return res.status(400).json({
                message :"something wrong !"
            })
        }
        else{
            return res.status(200).json({
                helmets
            })
        }
    })
}