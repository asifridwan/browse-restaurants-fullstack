const express = require('express');
const cors = require('cors');

const queries = require('./queries');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json(), cors({origin: '*'}));

app.listen(port, () => {
    console.log(`Server up and running at http://localhost:${port}`);
});

app.get('/restaurants', queries.getRestaurants);

app.post('/register', queries.register);

app.post('/login', queries.login);

app.get('/', (req, res) => {
    res.send("Browse Restaurants Backend");
})