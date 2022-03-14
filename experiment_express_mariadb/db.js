const mariadb = require('mariadb');

const options = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 5,
  port: 3306,
  database: 'test_1'
};

const pool = mariadb.createPool(options);

const connection = pool.getConnection();

module.exports = connection;