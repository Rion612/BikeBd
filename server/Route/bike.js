const express = require('express');
const { createBikeCategory, getBikeCategory } = require('../Controller/bikeCategory');
const multer = require('multer');
const shortid =require('shortid');
const path =require('path');





const router =  express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
  const upload = multer({ storage })



router.post('/create/bike/category',upload.single('categoryImage'),createBikeCategory);
router.get('/get/bike/categories',getBikeCategory);



module.exports = router;