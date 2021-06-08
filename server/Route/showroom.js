const express = require('express');
const { createShowroom, getAllShowrooms,deleteShowroom } = require('../Controller/showroom');

const router = express.Router();



router.post('/create/showroom',createShowroom);
router.get('/get/all/showrooms',getAllShowrooms);

router.post('/delete/showroom',deleteShowroom);


module.exports = router;