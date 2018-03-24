const express = require('express');
const { db, cache } = require('../database/index.js');

const router = express.Router();

router.use('/:restaurant_id/', express.static(__dirname + '/../client/dist'));

const cacheMethod = (req, res, next) => {
  const id = req.params.restaurant_id;
  cache.get(id, (err, data) => {
    if(err) throw err;
    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}
//http GET request for `/about`
router.get(`/:restaurant_id/about`, cacheMethod, (req, res) => {
  const id = req.params.restaurant_id;
  db(id, (item, err) => {
    if (err) throw err;
    cache.setex(id, 6000, JSON.stringify(item[0]));
    res.send(item[0]);
  });
});

//handles endpoint errors
router.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});


module.exports = router;