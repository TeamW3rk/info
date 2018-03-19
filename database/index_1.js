const pgp = require('pg-promise')({});
const path = require('path');
const dataGenerator = require('./dataGenerator.js');

const QueryFile = pgp.QueryFile;

const sql = (file) => {
  const filePath = path.join(__dirname, file);
  console.log(filePath)
  return new QueryFile(filePath, { minify: true });
};

const schema = sql('/create_schema.sql');
const table = sql('/create_table.sql');

const columnSet = [
  'restaurant_id',
  'name',
  'latitude',
  'longitude',
  'map',
  'dining_style',
  'cuisines',
  'hours_of_operations',
  'cross_street',
  'dress_code',
  'price_range',
  'payment_options',
  'phone_number',
  'website',
  'catering',
  'public_transit',
  'executive_chef',
  'additional',
  'special_events',
  'promotions',
  'rating',
  'reviews',
  'top_tags',
  'description',
  'neighborhood',
  'parking',
];

const tableName = { table: 'info'};

const createTable = async() => {
  let db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'mcestrada2',
  });
  await db.none(schema);
  db.$pool.end;
  db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'restaurants',
    user: 'mcestrada2',
  });
  return db.none(table).then(() => db);
}

function getNextData(t, pageIndex) {
  let data = null;
  if (pageIndex < 10000) {
    if(pageIndex % 100 === 0) {console.log(pageIndex * 1000, (new Date - startTime) / 60000)};
    data = [];
    for (let i = 0; i < 1000; i++) {
      const idx = pageIndex * 1000 + i; // to insert unique product names
      data.push(dataGenerator.generateSingleData(idx));
    }
  }
  return Promise.resolve(data);
}
const startTime = new Date();
const run = async () => {
  const db = await createTable();
  const cs = new pgp.helpers.ColumnSet(columnSet, tableName);
  const response = await db.tx('massive-insert', t => {
    return t.sequence(index => {
      return getNextData(t, index)
        .then(data => {
          if(data) {
            const insert = pgp.helpers.insert(data, cs);
            return t.none(insert);
          }
        });
    });
  });
  console.log('Total batches:', response.total, ', Duration:', response.duration / 60000);
  // db.$pool.end;
}
run();