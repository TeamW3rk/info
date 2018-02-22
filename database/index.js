const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restaurants', {useMongoClient: true});

//defining the location schema and data shape
let locationSchema = mongoose.Schema({

});

let location = mongoose.model('location', locationSchema);


//defining the information schema and data shape 
let informationSchema = mongoose.Schema({

});

let information = mongoose.model('information', informationSchema);