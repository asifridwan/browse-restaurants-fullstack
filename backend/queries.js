const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurants',
    password: '1508016',
    port: 5432
});

const getRestaurants = (req, res) => {
    pool.query('SELECT * FROM restaurants', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    });
}

const register = (req, res) => {
    const id = uuidv4();
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
            console.log(error);
        }

        pool.query('INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)', [id, username, email, hash], (errors, results) => {
            if (errors) {
                throw errors;
            }
            else {
                res.send(`User with a Username of ${username}, Email of ${email} and ID ${id} successfully registered !`);
            }
        });
    });
}

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    pool.query('SELECT * FROM users WHERE username = $1', [username], (error, result) => {
        if (error) {
            res.send(error);
        }

        if (result.rows.length > 0) {
            bcrypt.compare(password, result.rows[0].password, (errors, response) => {
                if (response) {
                    res.send(result);
                } else {
                    res.send("Wrong Username/Email and Password combination");
                }
            });
        } else {
            res.send("This user does not exist");
        }

    });
}

module.exports = {getRestaurants, register, login};