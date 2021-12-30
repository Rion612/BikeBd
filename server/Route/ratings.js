const express = require('express');
const { getALLRatings } = require('../Controller/rating');
const router = express.Router();


router.get('/get/all/bikes/ratings',getALLRatings);

module.exports = router;