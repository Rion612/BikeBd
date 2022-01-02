const express = require("express");
const { createReview } = require("../Controller/review");
const router = express.Router();


router.post('/create/bikes/review', createReview)

module.exports = router;