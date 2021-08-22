const express = require('express');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const { createNews } = require('../Controller/news');


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })
router.post('/create/news', upload.single('NewsImage'),createNews);



module.exports = router;