const News = require('../Model/News')



exports.createNews = (req, res) => {
    const newsObj = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category


    }
    if (req.file) {
        newsObj.NewsImage = process.env.API_URL + 'public/' + req.file.filename;

    }
    const news = new News(newsObj);
    news.save((error, news) => {
        if (error) {
            res.status(400).json({
                message: "Something happend wrong!"
            });
        }
        else {
            res.status(201).json({ news });
        }
    })
}
exports.getAllNews =async(req,res)=>{
    await News.find({}).exec((error,data)=>{
        if(error){
            return res.status(400).json({
                message : "Something is wrong"
            })
        }
        else{
            return res.status(200).json({
                data
            })
        }
    })
}

exports.deleteNews = (req, res)=>{
    try {
        News.findOneAndDelete({ _id: req.body._id })
            .exec((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something went Wrong! Please try again later."
                    });
                }
                else if (data) {

                    return res.status(200).json(
                        { message: "News is deleted successfully" }
                    );
                }

            })

    } catch (error) {
        return res.status(400).json({
            message: "Something went Wrong! Please try again later."
        });
    }
}