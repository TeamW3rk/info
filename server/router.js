const router = require('express').Router();
const requests = require('./requests.js');

//http GET request for `/about`
router.get(`/about`, requests.about.get);

//http GET request for  `/location`
router.get(`/location`, requests.location.get);

module.exports = router;