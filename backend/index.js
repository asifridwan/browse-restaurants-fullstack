const express = require('express');
const app = express();
const pool = require('./db');
const port = process.env.PORT || 4000;

const getRestaurants = (req, res) => {
    pool.query('SELECT * FROM restaurants', (error, result) => {
        if (error) {
            throw error;
        }

        res.status(200).json(result.rows)
    })
}

app.use(express.json());

app.listen(port, () => {
    console.log(`Server up and running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Browse Restaurants Backend');
});

app.get('/restaurants', getRestaurants);