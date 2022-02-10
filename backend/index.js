const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log('Server up and running !');
})

app.get('/', (req,res) => {
    res.send("Browse Restaurants Backend");
})