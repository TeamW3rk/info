const router = require('express').Router();
const requests = require('./requests.js');

//http GET request for `/about`
router.get(`/:restaurant_id/about`, requests.about.get);

//http GET request for  `/location`
router.get(`/:restaurant_id/location`, requests.location.get);

module.exports = router;