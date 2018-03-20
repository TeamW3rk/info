const pgp = require('pg-promise')({});
const path = require('path');

const QueryFile = pgp.QueryFile;
// connect to DB
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'restaurants',
  user: 'mcestrada2',
});

const sql = (relativeLocation = '/select.sql', tableName = 'info', columnName = 'restaurant_id') => {
  const options = {
    minify: true,
    params: {
      table: tableName,
      column: columnName,
    },
  };

  const filePath = path.join(__dirname, relativeLocation);
  return new QueryFile(filePath, options);
};

const retrieveDataQuery = sql();
const retrieveData = (id) => {
  return db.any(retrieveDataQuery, id);
}

module.exports.retrieveData = retrieveData;