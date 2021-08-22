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