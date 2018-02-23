const express = require('express');
const parser = require('body-parser');

let app = express();

//importing our router file
let router = require('./router.js');

app.use(parser.json());

//using the defined router 
app.use('/', router);

app.use(express.static(__dirname + '/../client'));

// app.get('/:restaurant_id/location', (req, res) => {
//   res.send();
// });

// app.get('/:restaurant_id/about', (req,res) => {
//   res.send();
// });


let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});