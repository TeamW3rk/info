const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const mongodb = require('mongodb');
const dataGenerator = require('./dataGenerator.js');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

const generateData = (id) => {
  const docs = [];
  for (let i = 0; i < 1000; i += 1) {
    docs.push(dataGenerator.generateSingleData(id + i));
  }
  return docs;
};

const workerPromise = (worker) => {
  return new Promise((resolve, reject) => {
    worker.on('disconnect', () => {
      resolve();
    });
  });
};

// connect to database
const run = async () => {
  const id = cluster.worker.id;
  const client = await MongoClient.connect(url);
  const db = client.db('restaurants');
  const collection = db.collection('information');
  for (let i = (id - 1) * 10 ** 4 / numCPUs; i < id * 10 ** 4 / numCPUs; i += 1) {
    let docs = generateData(i * 1000 + 1);
    await collection.insertMany(docs);
  }
  console.log((new Date() - startTime) / 1000 /60, 'minutes');
  client.close();
  process.exit();
};

const createIndexes = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db('restaurants');
  const collection = db.collection('information');
  return collection.createIndex({ restaurant_id: 1}).then(() => client);
};

const startTime = new Date();
console.log(startTime);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  const workerPromises = [];
  for (let i = 0; i < numCPUs; i++) {
    let worker = cluster.fork();
    workerPromises.push(workerPromise(worker));
  }

  Promise.all(workerPromises).then( async () => {
    const client = await createIndexes();
    console.log((new Date() - startTime) / 1000 /60 + ' minutes');
    client.close();
  });

} else {
  run();
  console.log(`Worker ${process.pid} started`);
}
