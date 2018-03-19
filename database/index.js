const faker = require('faker');  //faker will be used to generate dummy data
const dataGenerator = require('./dataGenerator.js');
const router = require('../server/router.js');

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

module.exports.information = information;
