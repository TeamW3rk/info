const mongoose = require('mongoose');
const faker = require('faker');  //faker will be used to generate dummy data
const dataGenerator = require('./dataGenerator.js');
const router = require('../server/router.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restaurants');

let informationSchema = mongoose.Schema({
  restaurant_id: Number,
  name: String,
  latitude: String,
  longitude: String,
  map: String, 
  diningStyle: String,
  cuisines: String,
  hoursOfOperations: {
   monday: {
     served : Boolean,
     lunch: String,
     dinner: String
   },
   friday: {
     served: Boolean, 
     lunch: String,
     dinner: String
   },
   saturday: {
     served : Boolean,
     lunch: String,
     dinner: String
   }
  }, 
  crossStreet: String,
  dressCode: String,
  priceRange: String,
  paymentOptions: Object,
  phoneNumber: String,
  website: String,
  catering: {
    cater: Boolean,
    description: String
  },
  publicTransit: String,
  executiveChef: String,
  additional: {
    chef: Boolean, 
    description: String
  },
  specialEvents: String, 
  promotions: String,
  rating: String,
  reviews: String,
  topTags: Array,
  description: String,
  neighborhood: String,
  parking: String
});

let Information = mongoose.model('Information', informationSchema);

//variable which will have the data in an array object with nested objects

const run = async () => {
  for (let i = 0; i < 10000000 / 1000; i += 1) {
    let docs = generateData(i + 1);
    await insertBulk(docs);
    if(i % 100 === 0) {
      console.log(i * 1000);
      console.log((new Date() - startTime) / 1000 /60, 'minutes');
    }
  }
  mongoose.disconnect();
}

const generateData = (id) => {
  const docs = [];
  for (let i = 0; i < 1000; i += 1) {
    docs.push(dataGenerator.generateSingleData(id));
  }
  return docs;
}

const insertBulk = (docs) => {
  return Information.insertMany(docs);
}

const startTime = new Date();
console.log(startTime);
run();

let information = function(id, callback){
  //will send a query to the database to retrieve the item with the cooresponding id 
  Information.find({restaurant_id: id}, (err, item) => {
    if (err) throw err;
    callback(item);
  });
};

module.exports.information = information;
