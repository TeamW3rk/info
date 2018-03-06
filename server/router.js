// const router = require('express').Router();
const db = require('../database/index.js');
const express = require('express');
const bodyParser = require('body-parser');
// const requests = require('./requests.js');

// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

const router = express.Router();

router.use('/:restaurant_id/', express.static(__dirname + '/../client'));

router.use(bodyParser.json());
//http GET request for `/about`
router.get(`/:restaurant_id/about`, (req, res) => {
  // console.log('about get function was invoked', req.params.restaurant_id);
  let id = req.params.restaurant_id;
  console.log('i invoked');
  // db.findInformation((error, item) => {
  //   if (error) throw error;
  //   res.send(item);
  // });
  console.log(db.information);
  db.information(id, (item, err) => {
    // console.log('this is item 0', item[0]);
    if (err) throw err;
    res.send(item[0]);
  });
});

//http GET request for  `/location`
// router.get(`/:restaurant_id/location`, requests.location.get);

// router.route(`/:restaurant_id/about`).get(requests.about.get);

// router.route(`/:restaurant_id/location`).get(requests.location.get);

module.exports = router;