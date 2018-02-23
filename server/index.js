const express = require('express');
const parser = require('body-parser');

let app = express();

//importing our router file
let router = require('./router.js');

app.use(parser.json());

//using the defined router 
app.use('/', router);
//all requests will be sent to the router to be directed to the correct endpoints

app.use(express.static(__dirname + '/../client'));

let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});