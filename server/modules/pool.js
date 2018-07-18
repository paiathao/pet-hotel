const pg = require('pg');
const Pool = pg.Pool; 
const pool = new Pool({
  host: 'localhost',
  port: '5432',  
  database: 'pet_hotel',   
  max: 10, 
  idleTimeoutMillis: 30000 
});

pool.on('connect', () => {
  console.log('PG connected to Postgresql');
});

pool.on('error', () => {
  console.log('PG ERROR', error);
});

module.exports = pool;