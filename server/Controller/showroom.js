const Bikebrand = require('../Model/Bikebrand');
const Showroom = require('../Model/Showroom');


exports.createShowroom = async(req, res) => {
    const brands = await Bikebrand.find({}).exec();
    Showroom.findOne({ name: req.body.name })
        .exec((error, showrooms) => {
            if (error) {
                return res.status(400).json({
                    error,
                });
            }
            else if (showrooms) {
                return res.status(400).json({
                    message: "Showroom already exist",
                });
            }
            else {
                const showroomObj = {
                    name: req.body.name,
                    address: req.body.address,
                    district: req.body.district,
                    thana: req.body.thana,
                    cellNo: req.body.cellNo,
                    brand: req.body.brand

                }

                const showRoom = new Showroom(showroomObj);

               showRoom.save((error, _showrooms) => {
                    if (error) {
                        return res.status(400).json({
                            error,
                        });
                    } else if (_showrooms) {
                        
                        const showrooms = Showroom.findOne({ _id: _showrooms._id })
                            .populate({ path: 'brand', select: "_id name brandImage" })
                            .exec((error, showrooms) => {
                                if (error) {
                                    return res.status(400).json({
                                        error
                                    })
                                }
                                else {
                                    return res.status(201).json({
                                        showrooms
                                    })
                                }
                            });
                    }
                })
            }
        })
}
exports.getAllShowrooms = async (req, res) => {
    const brands = await Bikebrand.find({}).exec();
    const showrooms = await Showroom.find({})
        .populate({ path: 'brand', select: "_id name brandImage" })
        .exec((error, _showrooms) => {
            if (error) {
                return res.status(400).json({
                    error
                })
            }
            else {
                return res.status(200).json({
                    _showrooms
                })
            }
        });

}
exports.deleteShowroom = (req, res) => {
    Showroom.findOneAndDelete({ _id: req.body._id })
        .exec((error, showroom) => {
            if (error) {
                return res.status(400).json({
                    message: "Something Wrong"
                });
            }
            else if (showroom) {

                return res.status(200).json(
                    { message: "Item is deleted successfully" }
                );
            }

        })
}
exports.editShowroom = (req, res) => {
    const updateObj = {};
    if (req.body.name) {
        updateObj.name = req.body.name;
    }
    if (req.body.address) {
        updateObj.address = req.body.address;
    }
    if (req.body.thana) {
        updateObj.thana = req.body.thana;
    }
    if (req.body.district) {
        updateObj.district = req.body.district;
    }
    if (req.body.thana) {
        updateObj.thana = req.body.thana;
    }
    if (req.body.cellNo) {
        updateObj.cellNo = req.body.cellNo;
    }

    Showroom.findOneAndUpdate({ _id: req.body._id }, {
        "$set": updateObj,
        "$currentDate": { lastModified: true }
    })
        .exec((error, result) => {
            if (result) {
                Showroom.findOne({ _id: result._id })
                    .exec((error, showroom) => {
                        if (error) {
                            return res.status(400).json({
                                message: "Something Wrong"
                            });
                        }
                        else if (showroom) {

                            return res.status(200).json(
                                { showroom }
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