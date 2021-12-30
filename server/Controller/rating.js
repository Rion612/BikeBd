const Rating = require("../Model/Rating");


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