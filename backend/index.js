import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server up and running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Browse Restaurants Backend");
});