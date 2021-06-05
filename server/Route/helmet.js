const express = require('express');
const { createHelemetBrand } = require('../Controller/helmetBrand');
const multer = require('multer');
const shortid =require('shortid');
const path =require('path');
const { createHelmet, getBike, gethelmets, getAllHelmet } = require('../Controller/helmet');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
  const upload = multer({ storage })
router.post('/create/helmet/brand',upload.single('hbrandImage'),createHelemetBrand);


router.post('/create/helmet',upload.single('helmetImage'),createHelmet);


router.get('/get/helmet/:slug',gethelmets);

router.get('/get/all/helmets',getAllHelmet);



module.exports = router;