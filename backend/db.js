const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurants',
    password: '1508016',
    port: 5432
});

const queryRestaurants = (req, res) => {
    pool.query('SELECT * FROM restaurants', (error, result) => {
        if (error) {
            throw error;
        }

        res.status(200).json(result.rows)
    })
}

module.exports = queryRestaurants;