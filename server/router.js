const express = require('express');
const db = require('../database/index.js');

const router = express.Router();

router.use('/:restaurant_id/', express.static(__dirname + '/../client/dist'));

//http GET request for `/about`
router.get(`/:restaurant_id/about`, (req, res) => {
  let id = req.params.restaurant_id;
  db.information(id, (item, err) => {
    if (err) throw err;
    res.send(item[0]);
  });
});

//handles endpoint errors
router.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});

module.exports = router;