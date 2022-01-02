const Rating = require("../Model/Rating");

exports.creatRating = async (req,res)=>{
    try {
        const { rating, bike } = req.body;
        const ratingObj = {
            rating,
            bike
        }
        const _rating = new Rating(ratingObj);
        await _rating.save((error, ratings)=>{
            if(error){
                return res.status(500).json({
                    status: false,
                    message: "Something is wrong! Please try again later.",
                    error: error
                }) 
            }
            else{
                return res.status(200).json({
                    status: true,
                    data: ratings
                })
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something is wrong! Please try again later.",
            error: error
        }) 
    }
}
exports.getALLRatings = (req, res) => {
    try {
        Rating.find({}).then((ratings) => {
            return res.status(200).json({
                status: true,
                message: "Data found!",
                ratings
            })
        })
            .catch((error) => {
                return res.status(500).json({
                    status: false,
                    message: "Something is wrong! Please try again later.",
                    error: error
                })
            })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something is wrong! Please try again later.",
            error: error
        })
    }
}