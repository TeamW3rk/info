const faker = require('faker');
const mongoose = require('mongoose');

// //data capsule
// let data = [];

//create ID counter
let idCount = 1;

//longitude generator
let longitude = () => {
  let randomData = Math.random() * (90 - (-90) + 1) + -90;
  return randomData.toFixed(6).toString();
};

//latitude generator
let latitude = () => {
  let randomData = Math.random() * (180 - (-180) + 1) + -180;
  return randomData.toFixed(6).toString();
};

//phone number generator 
let phoneNumber = () => {
  let areaCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let threeDigits = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let lastDigits = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  return `+1(${areaCode})${threeDigits}-${lastDigits}`;
};

//price range generator
let priceRange = () => {
  let min = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
  let max = Math.floor(Math.random() * (1000 - 51 + 1)) + 51;
  return `$${min} - $${max}`;
};

//function to create mock data. Will make 200 instances of the same schema and insert it into the database
//generate the actual data
let generateMockData = () => {
  //data capsule
  let data = [];
  for (let i = 0; i < 200; i++) {
    data.push({
      restaurant_id: idCount,
      name: faker.company.companyName(),
      latitude: latitude(),
      longitude: longitude(),
      diningStyle: faker.lorem.word(),
      cuisines: faker.lorem.word(),
      hoursOfOperations: {
      breakfast: {
         served : true,
         times: faker.lorem.words(),
         days: faker.lorem.words()
       },
       brunch: {
         Served: true, 
         times: faker.lorem.words(),
         days: faker.lorem.words()
       },
       lunch: {
         served : true,
         times: faker.lorem.words(),
         days: faker.lorem.words()
       },
       dinner: {
         served : true,
         times: faker.lorem.words(),
         days: faker.lorem.words()
       } 
      }, 
      crossStreet: faker.lorem.sentence(),
      dressCode: faker.lorem.sentence(),
      priceRange: priceRange(),
      paymentOptions: {
        visa: true,
        master: true,
        amex: true,
        discover: true
      },
      phoneNumber: phoneNumber() ,
      website: `${faker.lorem.word()}.com`,
      catering: {
        cater: true,
        description: faker.lorem.paragraph()
      },
      publicTransit: faker.lorem.sentence(),
      executiveChef: faker.lorem.paragraph(),
      additional: {
        chef: true, 
        description: faker.lorem.paragraph()
      },
      specialEvents: faker.lorem.paragraph(), 
      promotions: faker.lorem.paragraph()
    });
    idCount++;
  }
  console.log(data);
  return data;
};


module.exports.generateMockData = generateMockData;