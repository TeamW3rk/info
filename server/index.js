const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

let app = express();

//importing our router file
const router = require('./router.js');

app.use(cors());

app.use(parser.json());

app.use(express.static(__dirname + '/../client/dist'));

//using the defined router 
app.use('/r', router);
//all requests will be sent to the router to be directed to the correct endpoints

//handles endpoint errors
app.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});

let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});