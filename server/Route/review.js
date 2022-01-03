const express = require("express");
const { createReview, getAllReviews } = require("../Controller/review");
const router = express.Router();


router.post('/create/bikes/review', createReview);
router.get('/get/all/reviews',getAllReviews);

module.exports = router;