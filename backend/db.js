const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurants',
    password: '1508016',
    port: 5432
});

module.exports = pool;