const newrelic = require('newrelic');
const express = require('express');
const cors = require('cors');
const router = require('./router.js');

//importing database files so tests with the http requests can be ran 
const db = require('../database/index.js');

let app = express();

app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));

//using the defined router 
app.use('/r', router);
//all requests will be sent to the router to be directed to the correct endpoints

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

//handles endpoint errors
app.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});

let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});