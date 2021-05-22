const express = require('express');
const { createBikeCategory, getBikeCategory } = require('../Controller/bikeCategory');
const multer = require('multer');
const shortid =require('shortid');
const path =require('path');
const { createBike } = require('../Controller/bike');
const { createBikeBrand,getBikeBrand } = require('../Controller/bikeBrand');





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

  router.post('/create/bike/brand',upload.single('brandImage'),createBikeBrand);
  router.get('/get/bike/brands',getBikeBrand);

router.post('/create/bike/category',upload.single('categoryImage'),createBikeCategory);
router.get('/get/bike/categories',getBikeCategory);

router.post('/create/bike',upload.array('bikeImages'),createBike);
router.get('/get/all/bikes');



module.exports = router;