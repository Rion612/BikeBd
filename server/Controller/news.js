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
exports.editNews = async (req, res) => {
    const updateObj = {};
    if (req.body.title) {
        updateObj.title = req.body.title;
    }
    if (req.body.description) {
        updateObj.description = req.body.description;
    }
    if (req.body.category) {
        updateObj.category = req.body.category;
    }
    if (req.file) {
        updateObj.NewsImage = process.env.API_URL + 'public/' + req.file.filename;
    }

    News.findOneAndUpdate({ _id: req.body._id }, {
        "$set": updateObj,
        "$currentDate": { lastModified: true }
    })
        .exec((error, result) => {
            if (result) {
                News.findOne({ _id: result._id })
                    .exec((error, news) => {
                        if (error) {
                            return res.status(400).json({
                                message: "Something Wrong"
                            });
                        }
                        else if (news) {

                            return res.status(200).json(
                                { data: news, message: "News updated successfully." }
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