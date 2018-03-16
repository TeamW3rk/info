const mongodb = require('mongodb');
const dataGenerator = require('./dataGenerator.js');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

const mongoConnect = (MongoClient) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      resolve(client);
      reject(err);
    }); 
  });
}

const insertMany = (docs, collectionName, db) => {
  const collection = db.collection(collectionName);
  return new Promise((resolve, reject) => {
    collection.insertMany(docs, (err, result) => {
      resolve(result);
      reject(err);
    });
  });
}

const generateData = (id) => {
  const docs = [];
  for (let i = 0; i < 1000; i += 1) {
    docs.push(dataGenerator.generateSingleData(id));
  }
  return docs;
}

// connect to database
const run = async () => {
  const client = await mongoConnect(MongoClient);
  const db = client.db('restaurants');
  for (let i = 0; i < 10000000 / 1000; i += 1) {
    let docs = generateData(i + 1);
    await insertMany(docs, 'information', db);
    if(i % 100 === 0) {
      console.log(i * 1000);
      console.log((new Date() - startTime) / 1000 /60, 'minutes');
    }
  }
  client.close();
}


const startTime = new Date();
console.log(startTime);
run();

