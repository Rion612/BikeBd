const express = require('express');
const { IndexRoute } = require('../Controller');


const router =  express.Router();



router.get('/',IndexRoute);


module.exports = router;