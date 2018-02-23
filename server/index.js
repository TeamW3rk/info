const express = require('express');
const parser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client'));

let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});