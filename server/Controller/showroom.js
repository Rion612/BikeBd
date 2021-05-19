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
                cellNo : req.body.cellNo

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
exports.getAllShowrooms = (req,res)=>{
    Showroom.find({})
    .exec((error,showrooms)=>{
        if(error){
            return res.status(400).json({
                error,
              });
        }
        else if(showrooms){
            return res.status(200).json({
                showrooms,
            });
        }
    })
}