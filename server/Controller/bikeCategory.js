const slugify = require('slugify');

const BikeCategory = require('../Model/Bike.Category');



exports.createBikeCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),

    }
    if (req.file) {
        categoryObj.categoryImage = process.env.API_URL + 'public/' + req.file.filename;

    }
    const Bikecat = new BikeCategory(categoryObj);
    Bikecat.save((error, bikeCategory) => {
        if (error) {
            res.status(400).json({ error });
        }
        else {
            res.status(201).json({ bikeCategory });
        }
    })
}

exports.getBikeCategory = (req, res) => {
    BikeCategory.find({})
        .exec((error, bikeCategory) => {
            if (error) {
                return res.status(400).json({
                    message: "Something Wrong"
                });
            }
            else if (bikeCategory) {

                return res.status(200).json(
                    { bikeCategory }
                );
            }
        });
}

exports.deleteCategory = (req, res) => {
    BikeCategory.findOneAndDelete({ _id: req.body._id })
        .exec((error, bikeCategory) => {
            if (error) {
                return res.status(400).json({
                    message: "Something Wrong"
                });
            }
            else if (bikeCategory) {

                return res.status(200).json(
                    { message: "Item is deleted successfully" }
                );
            }

        })
}

exports.editCategory = (req, res) => {
    const updateObj = {};
    if (req.body.name) {
        updateObj.name = req.body.name;
    }
    if (req.file) {
        updateObj.categoryImage = process.env.API_URL + 'public/' + req.file.filename;
    }

    BikeCategory.findOneAndUpdate({ _id: req.body._id }, {
        "$set": updateObj,
        "$currentDate": { lastModified: true }
    })
        .exec((error, result) => {
            if (result) {
                BikeCategory.findOne({ _id: result._id })
                    .exec((error, bikeCategory) => {
                        if (error) {
                            return res.status(400).json({
                                message: "Something Wrong"
                            });
                        }
                        else if (bikeCategory) {

                            return res.status(200).json(
                                { bikeCategory }
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