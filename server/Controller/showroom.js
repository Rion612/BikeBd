const Bikebrand = require('../Model/Bikebrand');
const Showroom = require('../Model/Showroom');


exports.createShowroom = (req,res)=>{
    Showroom.findOne({name : req.body.name})
    .exec((error,showrooms)=>{
        if(error){
            return res.status(400).json({
                error,
              });
        }
        else if(showrooms){
            return res.status(400).json({
                message: "Showroom already exist",
              });
        }
        else{
            const showroomObj ={
                name : req.body.name,
                address : req.body.address,
                district : req.body.district,
                thana : req.body.thana,
                cellNo : req.body.cellNo,
                brand : req.body.brand

            }

            const showRoom = new Showroom(showroomObj);

            showRoom.save((error,_showrooms)=>{
                if (error) {
                    return res.status(400).json({
                      error,
                    });
                  } else if (_showrooms) {
                    return res.status(200).json({
                        _showrooms,
                    });
                  }
            })
        }
    })
}
exports.getAllShowrooms = async(req,res)=>{
    const brands =await Bikebrand.find({}).exec();
    const showrooms = await Showroom.find({})
    .populate({path:'brand',select :"_id name brandImage"})
    .exec((error,_showrooms)=>{
        if(error){
            return res.status(400).json({
                error
            })
        }
        else{
            return res.status(200).json({
                _showrooms
            })
        }
    });
    
}