const express = require('express');
const 
{ 
  createBikeCategory,
   getBikeCategory,
    deleteCategory, 
    editCategory
   } = require('../Controller/bikeCategory');
const multer = require('multer');
const shortid =require('shortid');
const path =require('path');
const { createBike, getALLBikes, bikeSearch, bikeSearchByBudget, bikeSearchByCC } = require('../Controller/bike');
const { createBikeBrand,getBikeBrand, editBrand, deleteBrand } = require('../Controller/bikeBrand');





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
  router.post('/edit/bike/brand',upload.single('brandImage'),editBrand);
  router.post('/delete/bike/brand',deleteBrand);

router.post('/create/bike/category',upload.single('categoryImage'),createBikeCategory);
router.post('/delete/bike/category',deleteCategory);
router.post('/edit/bike/category',upload.single('categoryImage'),editCategory);
router.get('/get/bike/categories',getBikeCategory);

router.post('/create/bike',upload.single('bikeImage'),createBike);
router.get('/get/all/bikes',getALLBikes);
 router.get('/bikes/search', bikeSearch);
 router.get('/bikes/search-by-budget', bikeSearchByBudget);
 router.get('/bikes/search-by-cc', bikeSearchByCC);


module.exports = router;