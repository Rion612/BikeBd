const Review = require("../Model/Review");

exports.createReview=(async (req, res) => {
    try {
        const { review, reviwer_name, bike } = req.body;
        const reviewObj = { review, reviwer_name, bike }
        const _review = new Review(reviewObj);
        await _review.save((error,review)=>{
            if(error){
                return res.status(500).json({
                    status: false,
                    message: "Soemthing is wrong!",
                    error: error
                });
            }
            else{
                return res.status(201).json({
                    status: true,
                    data: review
                });
            }
        }) 
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Soemthing is wrong!",
            error: error
        })
    }
})
exports.getAllReviews= async (req,res)=>{
    try {
        const reviews = await Review.find({});
        return res.status(200).json({
            status: true,
            total: reviews.length,
            data: reviews
        })
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Soemthing is wrong!",
            error: error
        }) 
    }
}