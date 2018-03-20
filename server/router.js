const express = require('express');
const db = require('../database/index.js');
const helper = require('./helper.js');

const router = express.Router();

router.use('/:restaurant_id/', express.static(__dirname + '/../client/dist'));

//http GET request for `/about`
router.get(`/:restaurant_id/about`, (req, res) => {
  let id = req.params.restaurant_id;
  db.retrieveData(id)
    .then((data) => {res.send(helper.covertKeysToCamelCase(data[0]))})
    .catch(err => { console.log(err); });
});

//handles endpoint errors
router.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});

module.exports = router;