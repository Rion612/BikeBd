const express = require('express');
const { createShowroom, getAllShowrooms } = require('../Controller/showroom');

const router = express.Router();



router.post('/create/showroom',createShowroom);
router.get('/get/all/showrooms',getAllShowrooms);


module.exports = router;