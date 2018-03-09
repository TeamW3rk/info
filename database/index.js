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
let data = dataGenerator.generateMockData();

let save = (data) => {
  data.forEach((item) => {

    let restaurant = new Information({
      restaurant_id: item.restaurant_id,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
      map: item.map,
      diningStyle: item.diningStyle,
      cuisines: item.cuisines,
      hoursOfOperations: {
        monday: {
          served : item.hoursOfOperations.monday.served,
          lunch: item.hoursOfOperations.monday.lunch,
          dinner: item.hoursOfOperations.monday.dinner
        },
        friday: {
          served: item.hoursOfOperations.friday.served, 
          lunch: item.hoursOfOperations.friday.lunch,
          dinner: item.hoursOfOperations.friday.dinner
        },
        saturday: {
          served : item.hoursOfOperations.saturday.served,
          lunch: item.hoursOfOperations.saturday.lunch,
          dinner: item.hoursOfOperations.saturday.dinner
        }
      }, 
      crossStreet: item.crossStreet,
      dressCode: item.dressCode,
      priceRange: item.priceRange,
      paymentOptions: {
        visa: item.paymentOptions.visa,
        master: item.paymentOptions.master,
        amex: item.paymentOptions.amex,
        discover: item.paymentOptions.discover
      },
      phoneNumber: item.phoneNumber,
      website: item.website,
      catering: {
        cater: item.catering.cater,
        description: item.catering.description
      },
      publicTransit: item.publicTransit,
      executiveChef: item.executiveChef,
      additional: {
        chef: item.additional.chef, 
        description: item.additional.description
      },
      specialEvents: item.specialEvents, 
      promotions: item.promotions,
      rating: item.rating,
      reviews: item.reviews,
      topTags: item.topTags,
      description: item.description,
      neighborhood: item.neighborhood,
      parking: item.parking
    });

    restaurant.save((err) => {
      if (err) return handleError(err);
    });
  });
}
//invocation of the save function to populate the database

//***UNCOMMENT FUNCTION TO POPULATE THE DB WITH NODE***
// save(data); 

let information = function(id, callback){
  //will send a query to the database to retrieve the item with the cooresponding id 
  Information.find({restaurant_id: id}, (err, item) => {
    if (err) throw err;
    callback(item);
  });
};

module.exports.information = information;
