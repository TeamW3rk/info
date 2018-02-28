const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

//importing database files so tests with the http requests can be ran 
const db = require('../database/index.js');

// ********************************

let app = express();

let cors = cors();

//importing our router file
let router = require('./router.js');

app.use(parser.json());

app.use(express.static(__dirname + '/../client'));

//middleware for cross domain communication
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//using the defined router 
// app.use('/restaurant', router);
//all requests will be sent to the router to be directed to the correct endpoints

//******************************** */
app.get(`/restaurant/about`, (req, res) => {
  console.log('about get function was invoked', req);
  db.findInformation((error, item) => {
    if (error) throw error;
    res.send(item);
  });
})

app.get(`/restaurant/location`, (req, res) => {
  console.log('about get function was invoked', req);
  db.findInformation((error, item) => {
    if (error) throw error;
    res.send(item);
  });
})
//*********************************** */

let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});