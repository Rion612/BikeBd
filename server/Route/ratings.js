const express = require('express');
const { getALLRatings, creatRating } = require('../Controller/rating');
const router = express.Router();

router.post('/create/bikes/rating', creatRating);
router.get('/get/all/bikes/ratings',getALLRatings);

module.exports = router;